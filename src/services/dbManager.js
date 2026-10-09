// ON BUS V2 — MongoDB Persistence Manager
// Production-grade storage for users, bookings, transactions, searches, and activity logs.

import bcrypt from 'bcryptjs'
import { ObjectId } from 'mongodb'
import { connectDatabase, closeDatabase, getMongoUri } from '../../api/lib/mongodb.js'

export { connectDatabase, closeDatabase }

async function ensureMongo() {
  return connectDatabase().catch(error => {
    throw new Error(`Database connection failed: ${error.message}`)
  })
}

function normalizeText(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function normalizePhone(phone) {
  return normalizeText(phone).replace(/\D/g, '')
}

function toMoney(value) {
  const amount = Number(value)
  return Number.isFinite(amount) && amount >= 0 ? amount : 0
}

function safeUser(user) {
  if (!user) return null
  const { password, passwordHash, ...safe } = user
  return {
    ...safe,
    id: (user._id || user.id || '').toString()
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function dbRegisterUser({ username, name, email, phone = '', password, role = 'passenger' }) {
  const cleanName = normalizeText(name)
  const cleanUsername = normalizeText(username).toLowerCase()
  const cleanEmail = normalizeText(email).toLowerCase()
  const cleanPhone = normalizePhone(phone)
  const cleanPassword = String(password || '').trim()

  if (!cleanName || !cleanEmail || !cleanUsername || !cleanPassword) {
    return { success: false, error: 'Name, username, email, and password are required' }
  }

  if (cleanPhone && cleanPhone.length !== 10) {
    return { success: false, error: 'Phone number must contain 10 digits' }
  }

  if (!validateEmail(cleanEmail)) {
    return { success: false, error: 'A valid email address is required' }
  }

  if (cleanPassword.length < 6) {
    return { success: false, error: 'Password must contain at least 6 characters' }
  }

  const db = await ensureMongo()
  const users = db.collection('users')
  const existing = await users.findOne({
    $or: [{ email: cleanEmail }, { username: cleanUsername }]
  })

  if (existing) {
    return { success: false, error: 'A user with this email or username already exists' }
  }

  const passwordHash = await bcrypt.hash(cleanPassword, 12)
  const user = {
    name: cleanName,
    username: cleanUsername,
    email: cleanEmail,
    phone: cleanPhone,
    password: passwordHash,
    passwordHash: passwordHash,
    role,
    createdAt: new Date(),
    lastLogin: new Date()
  }

  const result = await users.insertOne(user)
  const created = { ...user, id: result.insertedId.toString() }
  await db.collection('activity_logs').insertOne({
    userId: created.id,
    type: 'USER',
    action: 'USER_REGISTERED',
    details: `User ${cleanName} registered`,
    timestamp: new Date(),
    userEmail: cleanEmail,
    userPhone: cleanPhone
  }).catch(() => {})

  return { success: true, user: safeUser(created) }
}

export async function dbLoginUser(identifier, password) {
  const cleanIdentifier = normalizeText(identifier).toLowerCase()
  const cleanPassword = String(password || '')

  if (!cleanIdentifier || !cleanPassword) {
    return { success: false, error: 'Email/username and password are required' }
  }

  const db = await ensureMongo()
  const users = db.collection('users')
  const user = await users.findOne({
    $or: [{ email: cleanIdentifier }, { username: cleanIdentifier }]
  })

  if (!user || !(await bcrypt.compare(cleanPassword, user.passwordHash || user.password || ''))) {
    return { success: false, error: 'Invalid email/username or password' }
  }

  await users.updateOne({ _id: user._id }, { $set: { lastLogin: new Date() } })
  await db.collection('activity_logs').insertOne({
    userId: (user._id || user.id).toString(),
    type: 'USER',
    action: 'USER_LOGIN',
    details: `User ${user.name} logged in`,
    timestamp: new Date(),
    userEmail: user.email,
    userPhone: user.phone
  }).catch(() => {})

  return { success: true, user: safeUser({ ...user, id: (user._id || user.id).toString() }) }
}

export async function dbCreateBooking(bookingData) {
  const db = await ensureMongo()
  const ticketId = normalizeText(bookingData.ticketId) || `OB_${Date.now()}_${Math.random().toString(36).slice(2, 8).toUpperCase()}`
  const transactionId = normalizeText(bookingData.transactionId) || `TXN_${Date.now()}_${Math.random().toString(36).slice(2, 8).toUpperCase()}`
  const userId = normalizeText(bookingData.userId)
  const userPhone = normalizePhone(bookingData.userPhone)
  const userEmail = normalizeText(bookingData.userEmail).toLowerCase()
  const totalAmount = toMoney(bookingData.totalAmount ?? bookingData.totalFare)

  if (!userId || !userEmail || userPhone.length !== 10 || !bookingData.busId || !bookingData.route) {
    return { success: false, error: 'Valid user, email, phone number, bus, and route are required' }
  }

  const booking = {
    ticketId,
    transactionId,
    userId,
    userName: normalizeText(bookingData.userName),
    userEmail,
    userPhone,
    busId: normalizeText(bookingData.busId),
    busNumber: normalizeText(bookingData.busNumber),
    operator: normalizeText(bookingData.operator) || 'BEST',
    busType: normalizeText(bookingData.busType) || 'Standard',
    route: bookingData.route,
    boardingStop: normalizeText(bookingData.boardingStop),
    droppingStop: normalizeText(bookingData.droppingStop),
    locationPath: Array.isArray(bookingData.locationPath) ? bookingData.locationPath : [],
    currentBusLocation: bookingData.currentBusLocation || null,
    departureTime: normalizeText(bookingData.departure || bookingData.departureTime),
    arrivalTime: normalizeText(bookingData.arrival || bookingData.arrivalTime),
    travelDate: normalizeText(bookingData.date || bookingData.travelDate) || new Date().toISOString().split('T')[0],
    seats: Array.isArray(bookingData.seats) ? bookingData.seats : [],
    seatCount: Array.isArray(bookingData.seats) ? bookingData.seats.length : 0,
    farePerSeat: toMoney(bookingData.fare || bookingData.farePerSeat),
    totalAmount,
    paymentMode: normalizeText(bookingData.paymentMode || bookingData.paymentMethod).toUpperCase() || 'UPI',
    paymentStatus: (bookingData.paymentMode === 'CASH' || bookingData.paymentMethod === 'CASH') ? 'PAY_ON_BOARDING' : 'PAID',
    bookingStatus: 'CONFIRMED',
    bookedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  }

  const bookings = db.collection('bookings')
  const transactions = db.collection('transactions')
  const activity = db.collection('activity_logs')

  const existingBooking = await bookings.findOne({ ticketId })
  if (existingBooking) {
    return { success: false, error: 'This ticket ID already exists' }
  }

  const transaction = {
    transactionId,
    ticketId,
    userId,
    userName: booking.userName,
    userEmail,
    userPhone,
    amount: totalAmount,
    currency: 'INR',
    paymentMode: booking.paymentMode,
    paymentStatus: booking.paymentStatus,
    bookingStatus: booking.bookingStatus,
    tripDate: booking.travelDate,
    departureTime: booking.departureTime,
    route: booking.route,
    timestamp: new Date(),
    reference: booking.paymentMode === 'CASH' ? 'CASH_CONDUCTOR_COLLECTION' : 'PG_MUMBAI_TRANSIT'
  }

  await bookings.insertOne(booking)
  await transactions.insertOne(transaction)
  await activity.insertOne({
    userId,
    type: 'TRANSACTION',
    action: 'TICKET_BOOKED',
    details: `Booked ${booking.seatCount} seats on Bus ${booking.busNumber} (Ticket: ${ticketId})`,
    timestamp: new Date(),
    userEmail,
    userPhone,
    ticketId,
    transactionId
  })

  return { success: true, booking, transaction }
}

export async function dbCreateTransaction(transactionData) {
  const db = await ensureMongo()
  const transactionId = normalizeText(transactionData.transactionId) || `TXN_${Date.now()}_${Math.random().toString(36).slice(2, 8).toUpperCase()}`
  const phone = normalizePhone(transactionData.userPhone)
  const email = normalizeText(transactionData.userEmail).toLowerCase()
  const userId = normalizeText(transactionData.userId)

  if (!userId || !email || phone.length !== 10 || !transactionData.ticketId) {
    return { success: false, error: 'User, email, phone, and ticket ID are required' }
  }

  const transaction = {
    transactionId,
    ticketId: normalizeText(transactionData.ticketId),
    userId,
    userName: normalizeText(transactionData.userName),
    userEmail: email,
    userPhone: phone,
    amount: toMoney(transactionData.amount),
    currency: normalizeText(transactionData.currency).toUpperCase() || 'INR',
    paymentMode: normalizeText(transactionData.paymentMode).toUpperCase() || 'UPI',
    paymentStatus: normalizeText(transactionData.paymentStatus).toUpperCase() || 'PAID',
    bookingStatus: normalizeText(transactionData.bookingStatus).toUpperCase() || 'CONFIRMED',
    tripDate: normalizeText(transactionData.tripDate) || new Date().toISOString().split('T')[0],
    departureTime: normalizeText(transactionData.departureTime) || '00:00',
    route: transactionData.route || null,
    timestamp: new Date(),
    reference: normalizeText(transactionData.paymentReference) || `REF_${Date.now()}`,
    createdAt: new Date()
  }

  await db.collection('transactions').insertOne(transaction)
  await db.collection('activity_logs').insertOne({
    userId,
    type: 'TRANSACTION',
    action: 'TRANSACTION_RECORDED',
    details: `Transaction ${transactionId} for ticket ${transaction.ticketId}`,
    timestamp: transaction.timestamp,
    userEmail: email,
    userPhone: phone,
    ticketId: transaction.ticketId,
    transactionId
  })

  return { success: true, transaction }
}

export async function dbGetUserBookings(userId) {
  const db = await ensureMongo()
  return db.collection('bookings')
    .find({ userId })
    .sort({ bookedAt: -1 })
    .toArray()
}

export async function dbGetBookingByTicketId(ticketId) {
  const db = await ensureMongo()
  return db.collection('bookings').findOne({ ticketId })
}

export async function dbCancelBooking(ticketId, userId) {
  const db = await ensureMongo()
  const booking = await db.collection('bookings').findOne({ ticketId, userId })
  if (!booking) return { success: false, error: 'Booking not found' }
  if (booking.bookingStatus === 'CANCELLED') return { success: false, error: 'Already cancelled' }

  const cancelledAt = new Date()
  const result = await db.collection('bookings').updateOne(
    { ticketId, userId },
    { $set: { bookingStatus: 'CANCELLED', cancelledAt, updatedAt: cancelledAt } }
  )

  if (result.modifiedCount !== 1) {
    return { success: false, error: 'Cancellation failed' }
  }

  await db.collection('activity_logs').insertOne({
    userId,
    type: 'BOOKING',
    action: 'TICKET_CANCELLED',
    details: `Cancelled ticket ${ticketId}`,
    timestamp: cancelledAt
  })

  return { success: true, booking: { ...booking, bookingStatus: 'CANCELLED', cancelledAt } }
}

export async function dbRecordSearch({ userId = 'guest', from = '', to = '', travelDate = '', busType = 'All', resultsCount = 0 }) {
  const db = await ensureMongo()
  const search = {
    userId,
    from: normalizeText(from),
    to: normalizeText(to),
    travelDate: normalizeText(travelDate),
    busType: normalizeText(busType) || 'All',
    resultsCount: Number(resultsCount) || 0,
    searchedAt: new Date()
  }
  const result = await db.collection('search_history').insertOne(search)
  return { success: true, search: { ...search, id: result.insertedId.toString() } }
}

export async function dbGetSearchHistory(userId = null, limit = 15) {
  const db = await ensureMongo()
  const query = userId ? { userId } : {}
  const results = await db.collection('search_history')
    .find(query)
    .sort({ searchedAt: -1 })
    .limit(Math.min(Number(limit) || 15, 100))
    .toArray()

  return results.map(item => ({ ...item, id: item._id.toString() }))
}

export async function dbGetTransactions(userId = null) {
  const db = await ensureMongo()
  const query = userId ? { userId } : {}
  return db.collection('transactions')
    .find(query)
    .sort({ timestamp: -1 })
    .toArray()
}

export async function dbGetTransactionById(transactionId) {
  const db = await ensureMongo()
  return db.collection('transactions').findOne({ transactionId })
}

export async function dbGetRecentHistory(userId = null, limit = 20) {
  const db = await ensureMongo()
  const query = userId ? { userId } : {}
  const results = await db.collection('activity_logs')
    .find(query)
    .sort({ timestamp: -1 })
    .limit(Math.min(Number(limit) || 20, 100))
    .toArray()

  return results.map(item => ({
    ...item,
    id: item._id.toString(),
    type: item.type || 'ACTIVITY',
    userPhone: item.userPhone || '',
    userEmail: item.userEmail || ''
  }))
}

export async function dbGetStats() {
  const db = await ensureMongo()
  const [users, bookings, searches, transactions, activityLogs] = await Promise.all([
    db.collection('users').countDocuments(),
    db.collection('bookings').countDocuments(),
    db.collection('search_history').countDocuments(),
    db.collection('transactions').countDocuments(),
    db.collection('activity_logs').find().sort({ timestamp: -1 }).limit(10).toArray()
  ])

  const revenue = await db.collection('transactions').aggregate([
    { $match: { paymentStatus: 'PAID' } },
    { $group: { _id: null, total: { $sum: '$amount' } } }
  ]).toArray()

  const pendingRevenue = await db.collection('transactions').aggregate([
    { $match: { paymentStatus: 'PAY_ON_BOARDING' } },
    { $group: { _id: null, total: { $sum: '$amount' } } }
  ]).toArray()

  const confirmedBookings = await db.collection('bookings').countDocuments({ bookingStatus: 'CONFIRMED' })
  const cancelledBookings = await db.collection('bookings').countDocuments({ bookingStatus: 'CANCELLED' })

  return {
    totalUsers: users,
    totalBookings: bookings,
    confirmedBookings,
    cancelledBookings,
    totalSearches: searches,
    totalRevenue: revenue[0]?.total || 0,
    pendingCashRevenue: pendingRevenue[0]?.total || 0,
    totalTransactions: transactions,
    recentLogs: activityLogs.map(log => ({ ...log, id: log._id.toString() }))
  }
}

export async function dbExportAll() {
  const db = await ensureMongo()
  const [users, bookings, searches, transactions, activityLogs] = await Promise.all([
    db.collection('users').find().toArray(),
    db.collection('bookings').find().toArray(),
    db.collection('search_history').find().toArray(),
    db.collection('transactions').find().toArray(),
    db.collection('activity_logs').find().toArray()
  ])
  return { users, bookings, search_history: searches, transactions, activity_logs: activityLogs }
}

export function dbIsConfigured() {
  return true
}

export function dbObjectId(value) {
  return ObjectId.isValid(value) ? new ObjectId(value) : null
}
