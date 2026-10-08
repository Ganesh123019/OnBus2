// ON BUS V2 — API Service Layer
// Dynamic Map & Transit API endpoints with graceful offline fallback

import { BUSES, MUMBAI_STOPS, getAppStats, searchBuses } from '../data/buses'

export const API_BASE = '/api'

/**
 * Fetch buses tailored for live map tracking
 * @param {{ type?: string, q?: string }} filters
 */
export async function fetchMapBuses(filters = {}) {
  try {
    const params = new URLSearchParams()
    if (filters.type && filters.type !== 'All') params.set('type', filters.type)
    if (filters.q) params.set('q', filters.q)
    const queryStr = params.toString() ? `?${params.toString()}` : ''
    
    const res = await fetch(`${API_BASE}/map/buses${queryStr}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return {
      success: true,
      fromApi: true,
      timestamp: data.timestamp || Date.now(),
      buses: data.buses || []
    }
  } catch (err) {
    // Graceful offline fallback
    let list = BUSES
    if (filters.type && filters.type !== 'All') {
      list = list.filter(b => b.busType.toLowerCase().includes(filters.type.toLowerCase()))
    }
    if (filters.q) {
      const q = filters.q.toLowerCase()
      list = list.filter(b =>
        b.number.toLowerCase().includes(q) ||
        b.route.from.toLowerCase().includes(q) ||
        b.route.to.toLowerCase().includes(q) ||
        b.route.stops.some(s => s.toLowerCase().includes(q))
      )
    }
    return {
      success: true,
      fromApi: false,
      timestamp: Date.now(),
      buses: list
    }
  }
}

/**
 * Fetch all verified Mumbai stops and geo-coordinates
 */
export async function fetchMapStops() {
  try {
    const res = await fetch(`${API_BASE}/map/stops`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return {
      success: true,
      fromApi: true,
      stops: data.stops || MUMBAI_STOPS
    }
  } catch (err) {
    return {
      success: true,
      fromApi: false,
      stops: MUMBAI_STOPS
    }
  }
}

/**
 * Search buses by from, to, type
 */
export async function fetchBuses(filters = {}) {
  try {
    const params = new URLSearchParams()
    if (filters.from) params.set('from', filters.from)
    if (filters.to) params.set('to', filters.to)
    if (filters.type && filters.type !== 'All') params.set('type', filters.type)
    const queryStr = params.toString() ? `?${params.toString()}` : ''

    const res = await fetch(`${API_BASE}/buses${queryStr}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return data.buses || []
  } catch (err) {
    return searchBuses(filters.from, filters.to)
  }
}

/**
 * Fetch single bus details
 */
export async function fetchBusById(id) {
  try {
    const res = await fetch(`${API_BASE}/buses/${id}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return data.bus || null
  } catch (err) {
    return BUSES.find(b => b.id === id) || null
  }
}

/**
 * Fetch system stats
 */
export async function fetchAppStats() {
  try {
    const res = await fetch(`${API_BASE}/stats`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return data.stats || getAppStats()
  } catch (err) {
    return getAppStats()
  }
}
