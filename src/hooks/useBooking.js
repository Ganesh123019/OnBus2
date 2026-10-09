// ON BUS V2 — Booking Hook
import { useState, useEffect, useCallback } from 'react'
import { useAuth } from './useAuth'

function getAuthHeaders() {
  const headers = { 'Content-Type': 'application/json' }
  try {
    const token = localStorage.getItem('onbus_token')
    if (token) headers['Authorization'] = `Bearer ${token}`
  } catch {}
  return headers
}

export function useBooking() {
  const { user, loading: authLoading } = useAuth()
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const refreshBookings = useCallback(async () => {
    if (!user) {
      setBookings([])
      setError('')
      return []
    }
    try {
      const response = await fetch('/api/bookings', { headers: getAuthHeaders() })
      const result = await response.json()
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Unable to load your bookings')
      }
      const userBookings = result.bookings || []
      setBookings(userBookings)
      setError('')
      return userBookings
    } catch (loadError) {
      setError(loadError.message || 'Unable to load your bookings')
      throw loadError
    }
  }, [user])

  useEffect(() => {
    let active = true
    if (authLoading) return () => { active = false }

    setLoading(true)
    refreshBookings()
      .catch(error => {
        console.error('Booking list load failed:', error)
        if (active) setBookings([])
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => { active = false }
  }, [authLoading, refreshBookings])

  const getBookings = useCallback(() => bookings, [bookings])

  const getUserBookings = useCallback((userId) => {
    if (!user || (userId && user.id !== userId)) return []
    return [...bookings].sort((a, b) => new Date(b.bookedAt) - new Date(a.bookedAt))
  }, [bookings, user])

  const getBookingById = useCallback((ticketId) => {
    return bookings.find(booking => booking.ticketId === ticketId) || null
  }, [bookings])

  const getBookedSeats = useCallback(async (busId, date, departure) => {
    const params = new URLSearchParams({ busId, date, departure })
    const response = await fetch(`/api/bookings?${params.toString()}`)
    const result = await response.json()
    if (!response.ok || !result.success) {
      throw new Error(result.error || 'Unable to check seat availability')
    }
    return result.seats || []
  }, [])

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
      const ticketId = `OB${Array.from({ length: 8 }, () => {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
        return chars[Math.floor(Math.random() * chars.length)]
      }).join('')}`
      const transactionId = `TXN_${Date.now()}_${Math.random().toString(36).substring(2, 6).toUpperCase()}`

      const booking = {
        ticketId,
        transactionId,
        userId: userId || user?.id,
        userName: userName || user?.name,
        userEmail: userEmail || user?.email,
        userPhone: userPhone || user?.phone,
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
        fare,
        totalFare: fare * seats.length,
        status: 'CONFIRMED',
        paymentMethod,
        paymentStatus: paymentMethod === 'CASH' ? 'PAY_ON_BOARDING' : 'PAID',
        busType: bus.busType,
        bookedAt: new Date().toISOString()
      }

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(booking)
      })
      const result = await response.json()
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Booking could not be saved')
      }

      setBookings(current => [result.booking, ...current.filter(item => item.ticketId !== result.booking.ticketId)])
      return { success: true, booking: result.booking }
    } catch (error) {
      return { success: false, error: error.message || 'Booking failed. Please try again.' }
    }
  }, [user])

  const cancelBooking = useCallback(async (ticketId, userId) => {
    if (!user || user.id !== userId) return { success: false, error: 'Booking not found' }
    try {
      const response = await fetch(`/api/bookings?ticketId=${encodeURIComponent(ticketId)}`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ action: 'cancel' })
      })
      const result = await response.json()
      if (!response.ok || !result.success) {
        return { success: false, error: result.error || 'Cancellation failed' }
      }
      setBookings(current => current.map(item =>
        item.ticketId === ticketId ? result.booking : item
      ))
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message || 'Cancellation failed' }
    }
  }, [user])

  return {
    bookings,
    loading: authLoading || loading,
    error,
    getBookings,
    getUserBookings,
    getBookingById,
    getBookedSeats,
    refreshBookings,
    createBooking,
    cancelBooking
  }
}
