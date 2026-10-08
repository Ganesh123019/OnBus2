// ON BUS V2 — Booking Hook
import { useState, useCallback } from 'react'

const BOOKINGS_KEY = 'onbus_bookings'

function generateTicketId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let id = 'OB'
  for (let i = 0; i < 8; i++) {
    id += chars[Math.floor(Math.random() * chars.length)]
  }
  return id
}

export function useBooking() {
  const getBookings = useCallback(() => {
    try {
      return JSON.parse(localStorage.getItem(BOOKINGS_KEY) || '[]')
    } catch {
      return []
    }
  }, [])

  const getUserBookings = useCallback((userId) => {
    const all = getBookings()
    return all.filter(b => b.userId === userId)
      .sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt))
  }, [getBookings])

  const getBookingById = useCallback((ticketId) => {
    const all = getBookings()
    return all.find(b => b.ticketId === ticketId) || null
  }, [getBookings])

  const createBooking = useCallback(async ({
    userId,
    userName,
    userEmail = '',
    userPhone,
    busId,
    bus,
    seats,
    departure,
    date,
    fare,
    boardingStop,
    droppingStop,
    paymentMethod = 'UPI'
  }) => {
    try {
      const bookings = getBookings()

      // Check seat availability
      const existing = bookings.filter(b => b.busId === busId && b.status !== 'CANCELLED' && b.departure === departure)
      const takenSeats = existing.flatMap(b => b.seats)
      const conflict = seats.filter(s => takenSeats.includes(s))
      if (conflict.length > 0) {
        return { success: false, error: `Seats ${conflict.join(', ')} are already booked` }
      }

      const ticketId = generateTicketId()
      const transactionId = `TXN_${Date.now()}_${Math.random().toString(36).substring(2, 6).toUpperCase()}`

      const booking = {
        ticketId,
        transactionId,
        userId,
        userName,
        userEmail,
        userPhone,
        busId,
        busNumber: bus.number,
        operator: bus.operator || 'BEST',
        route: bus.route,
        boardingStop: boardingStop || bus.route.from,
        droppingStop: droppingStop || bus.route.to,
        locationPath: bus.routePath || [],
        currentBusLocation: bus.currentLocation || bus.routePath?.[0] || null,
        seats,
        departure,
        arrival: departure,
        date: date || new Date().toISOString().split('T')[0],
        fare: fare,
        totalFare: fare * seats.length,
        status: 'CONFIRMED',
        paymentMethod: paymentMethod,
        paymentStatus: paymentMethod === 'CASH' ? 'PAY_ON_BOARDING' : 'PAID',
        busType: bus.busType,
        bookedAt: new Date().toISOString()
      }

      const response = await fetch('/api/db/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking)
      })

      const result = await response.json()
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Database booking failed')
      }

      bookings.push(booking)
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings))

      return { success: true, booking: result.booking }
    } catch (err) {
      return { success: false, error: err.message || 'Booking failed. Please try again.' }
    }
  }, [getBookings])

  const cancelBooking = useCallback((ticketId, userId) => {
    try {
      const bookings = getBookings()
      const idx = bookings.findIndex(b => b.ticketId === ticketId && b.userId === userId)
      if (idx === -1) return { success: false, error: 'Booking not found' }
      if (bookings[idx].status === 'CANCELLED') return { success: false, error: 'Already cancelled' }

      bookings[idx].status = 'CANCELLED'
      bookings[idx].cancelledAt = new Date().toISOString()
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings))
      return { success: true }
    } catch {
      return { success: false, error: 'Cancellation failed' }
    }
  }, [getBookings])

  return {
    getBookings,
    getUserBookings,
    getBookingById,
    createBooking,
    cancelBooking
  }
}
