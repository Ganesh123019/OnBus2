import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { BUSES, MUMBAI_STOPS, getAppStats, searchBuses } from './src/data/buses.js'
import {
  dbRegisterUser,
  dbLoginUser,
  dbCreateBooking,
  dbGetUserBookings,
  dbGetBookingByTicketId,
  dbCancelBooking,
  dbRecordSearch,
  dbGetSearchHistory,
  dbGetStats,
  dbExportAll,
  dbCreateTransaction,
  dbGetTransactions,
  dbGetTransactionById,
  dbGetRecentHistory
} from './src/services/dbManager.js'

function parseJsonBody(req) {
  return new Promise((resolve) => {
    let body = ''
    req.on('data', chunk => { body += chunk })
    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'))
      } catch {
        resolve({})
      }
    })
  })
}

function busApiPlugin() {
  return {
    name: 'bus-api-endpoints',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, 'http://localhost:5173')
        if (url.pathname.startsWith('/api/')) {
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Access-Control-Allow-Origin', '*')

          // ── DATABASE ENDPOINTS ──
          if (url.pathname === '/api/db/stats') {
            res.end(JSON.stringify({ success: true, stats: dbGetStats() }))
            return
          }

          if (url.pathname === '/api/db/export') {
            res.end(JSON.stringify({ success: true, database: dbExportAll() }))
            return
          }

          if (url.pathname === '/api/db/transactions') {
            if (req.method === 'POST') {
              const body = await parseJsonBody(req)
              const result = await dbCreateTransaction(body)
              res.statusCode = result.success ? 201 : 400
              res.end(JSON.stringify(result))
              return
            }

            const userId = url.searchParams.get('userId')
            const transactions = await dbGetTransactions(userId)
            res.end(JSON.stringify({ success: true, count: transactions.length, transactions }))
            return
          }

          if (url.pathname === '/api/db/history') {
            const userId = url.searchParams.get('userId')
            const limit = Number(url.searchParams.get('limit') || 20)
            const history = await dbGetRecentHistory(userId, Number.isFinite(limit) ? limit : 20)
            res.end(JSON.stringify({ success: true, count: history.length, history }))
            return
          }

          if (url.pathname === '/api/db/bookings') {
            if (req.method === 'POST') {
              const body = await parseJsonBody(req)
              const result = await dbCreateBooking(body)
              res.end(JSON.stringify(result))
              return
            } else {
              const userId = url.searchParams.get('userId')
              const bookings = userId ? await dbGetUserBookings(userId) : (await dbExportAll()).bookings
              res.end(JSON.stringify({ success: true, count: bookings.length, bookings }))
              return
            }
          }

          if (url.pathname.startsWith('/api/db/bookings/')) {
            const sub = url.pathname.replace('/api/db/bookings/', '')
            if (sub.endsWith('/cancel') && req.method === 'POST') {
              const ticketId = sub.replace('/cancel', '')
              const body = await parseJsonBody(req)
              const result = await dbCancelBooking(ticketId, body.userId)
              res.end(JSON.stringify(result))
              return
            } else {
              const ticket = await dbGetBookingByTicketId(sub)
              if (ticket) {
                res.end(JSON.stringify({ success: true, booking: ticket }))
              } else {
                res.statusCode = 404
                res.end(JSON.stringify({ success: false, error: 'Booking not found' }))
              }
              return
            }
          }

          if (url.pathname === '/api/db/searches') {
            if (req.method === 'POST') {
              const body = await parseJsonBody(req)
              const result = await dbRecordSearch(body)
              res.end(JSON.stringify(result))
              return
            } else {
              const userId = url.searchParams.get('userId')
              const searches = await dbGetSearchHistory(userId)
              res.end(JSON.stringify({ success: true, count: searches.length, searches }))
              return
            }
          }

          if (url.pathname === '/api/db/users/register' && req.method === 'POST') {
            const body = await parseJsonBody(req)
            const result = await dbRegisterUser(body)
            res.end(JSON.stringify(result))
            return
          }

          if (url.pathname === '/api/db/users/login' && req.method === 'POST') {
            const body = await parseJsonBody(req)
            const result = await dbLoginUser(body.identifier || body.email, body.password)
            res.end(JSON.stringify(result))
            return
          }

          // ── TRANSIT & MAP ENDPOINTS ──
          if (url.pathname === '/api/map/stops') {
            res.end(JSON.stringify({ success: true, count: Object.keys(MUMBAI_STOPS).length, stops: MUMBAI_STOPS }))
            return
          }

          if (url.pathname === '/api/map/buses') {
            const type = url.searchParams.get('type')
            const search = url.searchParams.get('q')
            let list = BUSES
            if (type && type !== 'All') {
              list = list.filter(b => b.busType.toLowerCase().includes(type.toLowerCase()))
            }
            if (search) {
              const q = search.toLowerCase()
              list = list.filter(b =>
                b.number.toLowerCase().includes(q) ||
                b.route.from.toLowerCase().includes(q) ||
                b.route.to.toLowerCase().includes(q) ||
                b.route.stops.some(s => s.toLowerCase().includes(q))
              )
            }
            res.end(JSON.stringify({
              success: true,
              timestamp: Date.now(),
              count: list.length,
              buses: list.map(b => ({
                id: b.id,
                number: b.number,
                type: b.type,
                busType: b.busType,
                operator: b.operator,
                status: b.status,
                color: b.color,
                route: b.route,
                fare: b.fare,
                totalSeats: b.totalSeats,
                currentLocation: b.currentLocation,
                routePath: b.routePath,
                amenities: b.amenities
              }))
            }))
            return
          }

          if (url.pathname === '/api/buses') {
            const from = url.searchParams.get('from')
            const to = url.searchParams.get('to')
            const type = url.searchParams.get('type')
            let filtered = searchBuses(from, to)
            if (type && type !== 'All') {
              filtered = filtered.filter(b => b.busType.toLowerCase().includes(type.toLowerCase()))
            }
            res.end(JSON.stringify({ success: true, count: filtered.length, buses: filtered }))
            return
          }

          if (url.pathname.startsWith('/api/buses/')) {
            const id = url.pathname.replace('/api/buses/', '')
            const bus = BUSES.find(b => b.id === id)
            if (bus) {
              res.end(JSON.stringify({ success: true, bus }))
            } else {
              res.statusCode = 404
              res.end(JSON.stringify({ success: false, error: 'Bus not found' }))
            }
            return
          }

          if (url.pathname === '/api/stats') {
            res.end(JSON.stringify({ success: true, stats: getAppStats() }))
            return
          }

          res.statusCode = 404
          res.end(JSON.stringify({ success: false, error: 'API route not found' }))
          return
        }
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), busApiPlugin()],
  server: {
    port: 5173,
    open: true
  }
})
