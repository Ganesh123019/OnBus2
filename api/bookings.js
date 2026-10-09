import { randomBytes } from 'node:crypto'
import {
  getAuthenticatedUser,
  getDatabase,
  internalError,
  readJsonBody,
  requestUrl,
  sendJson
} from './lib/mongodb.js'

function clean(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function toBookingResult(booking) {
  if (!booking) return null
  const { _id, ...data } = booking
  return {
    ...data,
    id: _id?.toString(),
    status: booking.status || booking.bookingStatus || 'CONFIRMED',
    paymentMethod: booking.paymentMethod || booking.paymentMode || 'UPI',
    departure: booking.departure || booking.departureTime || '',
    arrival: booking.arrival || booking.arrivalTime || '',
    date: booking.date || booking.travelDate || '',
    fare: booking.fare ?? booking.farePerSeat ?? 0,
    totalFare: booking.totalFare ?? booking.totalAmount ?? 0
  }
}

function makeTicketId() {
  return `OB${randomBytes(5).toString('hex').toUpperCase()}`
}

export default async function bookings(req, res) {
  if (!['GET', 'POST'].includes(req.method)) {
    res.setHeader('Allow', 'GET, POST')
    sendJson(res, 405, { success: false, error: 'Method not allowed' })
    return
  }

  try {
    const url = requestUrl(req)
    const db = await getDatabase()
    const collection = db.collection('bookings')

    if (req.method === 'GET') {
      const busId = clean(url.searchParams.get('busId'))
      if (busId) {
        const query = {
          busId,
          status: { $nin: ['CANCELLED'] },
          bookingStatus: { $nin: ['CANCELLED'] }
        }
        const date = clean(url.searchParams.get('date'))
        const departure = clean(url.searchParams.get('departure'))
        const filters = []
        if (date) filters.push({ $or: [{ date }, { travelDate: date }] })
        if (departure) filters.push({ $or: [{ departure }, { departureTime: departure }] })
        if (filters.length) query.$and = filters
        const activeBookings = await collection.find(query, { projection: { seats: 1 } }).toArray()
        const seatClaims = await db.collection('booking_seats').find({
          busId,
          ...(date ? { date } : {}),
          ...(departure ? { departure } : {})
        }, { projection: { seat: 1 } }).toArray()
        const seats = [
          ...activeBookings.flatMap(booking => booking.seats || []),
          ...seatClaims.map(claim => claim.seat)
        ]
        sendJson(res, 200, {
          success: true,
          seats: filters.length ? [...new Set(seats)] : seats
        })
        return
      }

      const user = await getAuthenticatedUser(req, db)
      if (!user) {
        sendJson(res, 401, { success: false, error: 'Please sign in to view bookings' })
        return
      }

      const userIdStr = (user._id || user.id || '').toString()
      const ticketId = clean(url.searchParams.get('ticketId'))
      if (ticketId) {
        const booking = await collection.findOne({
          ticketId,
          $or: [{ userId: userIdStr }, { userEmail: user.email }]
        })
        if (!booking) {
          sendJson(res, 404, { success: false, error: 'Booking not found' })
          return
        }
        sendJson(res, 200, { success: true, booking: toBookingResult(booking) })
        return
      }

      const userBookings = await collection.find({
        $or: [{ userId: userIdStr }, { userEmail: user.email }]
      }).sort({ bookedAt: -1 }).toArray()
      sendJson(res, 200, {
        success: true,
        count: userBookings.length,
        bookings: userBookings.map(toBookingResult)
      })
      return
    }

    const body = await readJsonBody(req)
    const user = await getAuthenticatedUser(req, db)
    if (!user) {
      sendJson(res, 401, { success: false, error: 'Please sign in to manage bookings' })
      return
    }

    const userIdStr = (user._id || user.id || '').toString()
    const ticketId = clean(url.searchParams.get('ticketId'))
    if (ticketId && body.action === 'cancel') {
      const booking = await collection.findOne({
        ticketId,
        $or: [{ userId: userIdStr }, { userEmail: user.email }]
      })
      if (!booking) {
        sendJson(res, 404, { success: false, error: 'Booking not found' })
        return
      }
      if (booking.status === 'CANCELLED' || booking.bookingStatus === 'CANCELLED') {
        sendJson(res, 409, { success: false, error: 'Booking is already cancelled' })
        return
      }

      const cancelledAt = new Date().toISOString()
      await collection.updateOne(
        { _id: booking._id, status: { $ne: 'CANCELLED' } },
        { $set: { status: 'CANCELLED', bookingStatus: 'CANCELLED', cancelledAt, updatedAt: new Date() } }
      )
      if (booking.claimId) {
        await db.collection('booking_seats').deleteMany({ claimId: booking.claimId })
      }
      const updated = await collection.findOne({ _id: booking._id })
      sendJson(res, 200, { success: true, booking: toBookingResult(updated) })
      return
    }

    const seats = Array.isArray(body.seats) ? [...new Set(body.seats.map(clean).filter(Boolean))] : []
    const busId = clean(body.busId)
    const date = clean(body.date)
    const departure = clean(body.departure)
    const route = body.route && typeof body.route === 'object' ? body.route : null
    const userPhone = clean(body.userPhone || user.phone).replace(/\D/g, '')
    const fare = Number(body.fare)
    if (!busId || !date || !departure || !route || seats.length === 0 || seats.length > 6 ||
      !Number.isFinite(fare) || fare < 0 || (userPhone && userPhone.length !== 10)) {
      sendJson(res, 400, { success: false, error: 'Valid trip details, seats, and fare are required' })
      return
    }

    const conflictingBookings = await collection.find({
      busId,
      status: { $nin: ['CANCELLED'] },
      bookingStatus: { $nin: ['CANCELLED'] },
      seats: { $in: seats },
      $and: [
        { $or: [{ date }, { travelDate: date }] },
        { $or: [{ departure }, { departureTime: departure }] }
      ]
    }, { projection: { seats: 1 } }).toArray()
    const takenSeats = new Set(conflictingBookings.flatMap(booking => booking.seats || []))
    const conflicts = seats.filter(seat => takenSeats.has(seat))
    if (conflicts.length) {
      sendJson(res, 409, { success: false, error: `Seats ${conflicts.join(', ')} are already booked` })
      return
    }

    const bookedAt = new Date().toISOString()
    const paymentMethod = clean(body.paymentMethod).toUpperCase() || 'UPI'
    const totalFare = fare * seats.length
    const booking = {
      ticketId: /^OB[A-Z0-9]{8}$/.test(clean(body.ticketId)) ? clean(body.ticketId) : makeTicketId(),
      transactionId: clean(body.transactionId) || `TXN_${Date.now()}_${randomBytes(3).toString('hex').toUpperCase()}`,
      userId: userIdStr,
      userName: clean(body.userName) || user.name,
      userEmail: user.email,
      userPhone,
      busId,
      busNumber: clean(body.busNumber),
      operator: clean(body.operator) || 'BEST',
      route,
      boardingStop: clean(body.boardingStop) || clean(route.from),
      droppingStop: clean(body.droppingStop) || clean(route.to),
      locationPath: Array.isArray(body.locationPath) ? body.locationPath : [],
      currentBusLocation: body.currentBusLocation || null,
      seats,
      departure,
      arrival: clean(body.arrival) || departure,
      date,
      fare,
      totalFare,
      status: 'CONFIRMED',
      paymentMethod,
      paymentStatus: paymentMethod === 'CASH' ? 'PAY_ON_BOARDING' : 'PAID',
      busType: clean(body.busType),
      bookedAt,
      departureTime: departure,
      arrivalTime: clean(body.arrival) || departure,
      travelDate: date,
      farePerSeat: fare,
      totalAmount: totalFare,
      bookingStatus: 'CONFIRMED',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const claimId = randomBytes(16).toString('hex')
    booking.claimId = claimId
    try {
      await db.collection('booking_seats').insertMany(seats.map(seat => ({
        claimId,
        busId,
        date,
        departure,
        seat,
        ticketId: booking.ticketId
      })))
    } catch (error) {
      await db.collection('booking_seats').deleteMany({ claimId })
      if (error.code === 11000) {
        sendJson(res, 409, { success: false, error: 'One or more selected seats have already been booked' })
        return
      }
      throw error
    }

    let result
    try {
      result = await collection.insertOne(booking)
    } catch (error) {
      await db.collection('booking_seats').deleteMany({ claimId })
      throw error
    }

    // Record into transactions collection
    await db.collection('transactions').insertOne({
      transactionId: booking.transactionId,
      ticketId: booking.ticketId,
      userId: userIdStr,
      userName: booking.userName,
      userEmail: booking.userEmail,
      userPhone: booking.userPhone,
      amount: booking.totalFare,
      currency: 'INR',
      paymentMode: booking.paymentMethod,
      paymentStatus: booking.paymentStatus,
      bookingStatus: booking.bookingStatus,
      tripDate: booking.date,
      departureTime: booking.departure,
      route: booking.route,
      timestamp: new Date(),
      reference: booking.paymentMethod === 'CASH' ? 'CASH_CONDUCTOR_COLLECTION' : 'PG_MUMBAI_TRANSIT'
    }).catch(() => {})

    sendJson(res, 201, { success: true, booking: toBookingResult({ ...booking, _id: result.insertedId }) })
  } catch (error) {
    if (error.statusCode) {
      sendJson(res, error.statusCode, { success: false, error: error.message })
      return
    }
    if (error.code === 11000) {
      sendJson(res, 409, { success: false, error: 'A booking with this ticket ID already exists' })
      return
    }
    internalError(res, error.message)
  }
}
