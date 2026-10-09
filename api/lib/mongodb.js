import { createHash, randomBytes } from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import bcrypt from 'bcryptjs'
import { MongoClient, ObjectId } from 'mongodb'

const SESSION_COOKIE = 'onbus_session'
const SESSION_DURATION_MS = 30 * 24 * 60 * 60 * 1000
const globalForMongo = globalThis

function loadEnvIfPresent() {
  try {
    if (typeof process.loadEnvFile === 'function') {
      process.loadEnvFile()
      return
    }
  } catch {}

  try {
    const envFile = path.resolve(process.cwd(), '.env')
    if (fs.existsSync(envFile)) {
      const lines = fs.readFileSync(envFile, 'utf8').split('\n')
      for (const line of lines) {
        const trimmed = line.trim()
        if (!trimmed || trimmed.startsWith('#')) continue
        const eq = trimmed.indexOf('=')
        if (eq > 0) {
          const k = trimmed.slice(0, eq).trim()
          let v = trimmed.slice(eq + 1).trim()
          if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
            v = v.slice(1, -1)
          }
          if (!process.env[k]) process.env[k] = v
        }
      }
    }
  } catch {}
}

loadEnvIfPresent()

function isPlaceholderUri(uri) {
  if (!uri) return true
  const lower = uri.toLowerCase()
  return (
    lower.includes('cluster.example.mongodb.net') ||
    lower.includes('username:password') ||
    lower.includes('example.com')
  )
}

let memoryServerPromise = null

async function getOrStartMemoryServer() {
  if (globalForMongo.onBusMemoryServerUri) {
    return globalForMongo.onBusMemoryServerUri
  }

  if (!memoryServerPromise) {
    memoryServerPromise = (async () => {
      try {
        const { MongoMemoryServer } = await import('mongodb-memory-server')
        const dataDir = path.resolve(process.cwd(), '.mongo-data')
        try {
          if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true })
          }
        } catch {}

        let server
        try {
          server = await MongoMemoryServer.create({
            instance: {
              dbPath: dataDir,
              dbName: 'onbus'
            }
          })
        } catch (err) {
          console.warn('Persistent dbPath failed for memory server, falling back to in-memory:', err.message)
          server = await MongoMemoryServer.create({
            instance: {
              dbName: 'onbus'
            }
          })
        }

        const uri = server.getUri('onbus')
        globalForMongo.onBusMemoryServer = server
        globalForMongo.onBusMemoryServerUri = uri
        return uri
      } catch (err) {
        memoryServerPromise = null
        throw new Error(`Failed to start local embedded MongoDB: ${err.message}`)
      }
    })()
  }

  return memoryServerPromise
}

export async function getMongoUri() {
  const envUri = process.env.MONGODB_URI
  if (envUri && !isPlaceholderUri(envUri)) {
    return envUri
  }
  return getOrStartMemoryServer()
}

export async function connectDatabase() {
  if (globalForMongo.onBusDbInstance && globalForMongo.onBusMongoClient) {
    return globalForMongo.onBusDbInstance
  }

  if (!globalForMongo.onBusMongoConnection) {
    globalForMongo.onBusMongoConnection = (async () => {
      let uri = process.env.MONGODB_URI
      let isMemory = false

      if (!uri || isPlaceholderUri(uri)) {
        uri = await getOrStartMemoryServer()
        process.env.MONGODB_URI = uri
        process.env.MONGODB_DB_NAME = 'onbus'
        isMemory = true
      }

      let client = null
      try {
        client = new MongoClient(uri, {
          maxPoolSize: 10,
          serverSelectionTimeoutMS: 4000
        })
        await client.connect()
      } catch (externalError) {
        if (!isMemory) {
          console.warn(`Connecting to configured MONGODB_URI failed (${externalError.message}). Falling back to local embedded MongoDB...`)
          uri = await getOrStartMemoryServer()
          process.env.MONGODB_URI = uri
          process.env.MONGODB_DB_NAME = 'onbus'
          client = new MongoClient(uri, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000
          })
          await client.connect()
        } else {
          throw externalError
        }
      }

      const dbName = process.env.MONGODB_DB_NAME || 'onbus'
      const db = client.db(dbName)
      globalForMongo.onBusMongoClient = client
      globalForMongo.onBusDbInstance = db

      await ensureIndexesAndSeed(db)
      return db
    })().catch((err) => {
      globalForMongo.onBusMongoConnection = null
      globalForMongo.onBusDbInstance = null
      throw err
    })
  }

  return globalForMongo.onBusMongoConnection
}

export async function getDatabase() {
  return connectDatabase()
}

export async function closeDatabase() {
  if (globalForMongo.onBusMongoClient) {
    await globalForMongo.onBusMongoClient.close()
    globalForMongo.onBusMongoClient = null
    globalForMongo.onBusDbInstance = null
    globalForMongo.onBusMongoConnection = null
  }
  if (globalForMongo.onBusMemoryServer) {
    await globalForMongo.onBusMemoryServer.stop()
    globalForMongo.onBusMemoryServer = null
    globalForMongo.onBusMemoryServerUri = null
  }
}

export async function seedDefaultData(db) {
  const usersCollection = db.collection('users')
  const bookingsCollection = db.collection('bookings')
  const transactionsCollection = db.collection('transactions')

  const priyaPassHash = await bcrypt.hash('priya123', 10)
  const demoPassHash = await bcrypt.hash('demo123', 10)

  // 1. Seed Priya Sharma
  const priyaUser = await usersCollection.findOne({ email: 'priya@onbus.in' })
  let priyaId
  if (!priyaUser) {
    const res = await usersCollection.insertOne({
      name: 'Priya Sharma',
      username: 'priyasharma',
      email: 'priya@onbus.in',
      phone: '9123456789',
      password: priyaPassHash,
      passwordHash: priyaPassHash,
      role: 'passenger',
      createdAt: new Date('2026-10-02T11:30:00.000Z'),
      lastLogin: new Date()
    })
    priyaId = res.insertedId.toString()
  } else {
    priyaId = (priyaUser._id || priyaUser.id).toString()
    if (!priyaUser.passwordHash || !priyaUser.password) {
      await usersCollection.updateOne(
        { _id: priyaUser._id },
        { $set: { password: priyaPassHash, passwordHash: priyaPassHash } }
      )
    }
  }

  // 2. Seed Demo User
  const demoUser = await usersCollection.findOne({ email: 'demo@onbus.in' })
  let demoId
  if (!demoUser) {
    const res = await usersCollection.insertOne({
      name: 'Demo User',
      username: 'demouser',
      email: 'demo@onbus.in',
      phone: '9876543210',
      password: demoPassHash,
      passwordHash: demoPassHash,
      role: 'passenger',
      createdAt: new Date('2026-10-01T10:00:00.000Z'),
      lastLogin: new Date()
    })
    demoId = res.insertedId.toString()
  } else {
    demoId = (demoUser._id || demoUser.id).toString()
    if (!demoUser.passwordHash || !demoUser.password) {
      await usersCollection.updateOne(
        { _id: demoUser._id },
        { $set: { password: demoPassHash, passwordHash: demoPassHash } }
      )
    }
  }

  // 3. Seed Demo Bookings
  const existingDemoBooking = await bookingsCollection.findOne({ ticketId: 'OB87A29B' })
  if (!existingDemoBooking) {
    const sampleBookings = [
      {
        ticketId: 'OB87A29B',
        transactionId: 'TXN_20261008_OB87A29B',
        userId: demoId,
        userName: 'Demo User',
        userEmail: 'demo@onbus.in',
        userPhone: '9876543210',
        busId: 'B421_1',
        busNumber: '421',
        operator: 'BEST',
        busType: 'Non-AC',
        route: {
          from: 'Borivali Station',
          to: 'Andheri Station',
          stops: [
            'Borivali Station',
            'Kandivali Station',
            'Malad Station',
            'Goregaon Station',
            'Andheri Station'
          ]
        },
        boardingStop: 'Borivali Station',
        droppingStop: 'Andheri Station',
        locationPath: [
          { lat: 19.2307, lng: 72.8567 },
          { lat: 19.2046, lng: 72.8468 },
          { lat: 19.1865, lng: 72.8486 },
          { lat: 19.1663, lng: 72.8493 },
          { lat: 19.1197, lng: 72.8466 }
        ],
        currentBusLocation: { lat: 19.2277, lng: 72.8522 },
        departure: '08:00',
        departureTime: '08:00',
        arrival: '09:06',
        arrivalTime: '09:06',
        date: '2026-10-08',
        travelDate: '2026-10-08',
        seats: ['1A', '1B'],
        seatCount: 2,
        fare: 20,
        farePerSeat: 20,
        totalFare: 40,
        totalAmount: 40,
        paymentMethod: 'CASH',
        paymentMode: 'CASH',
        paymentStatus: 'PAY_ON_BOARDING',
        status: 'CONFIRMED',
        bookingStatus: 'CONFIRMED',
        bookedAt: new Date('2026-10-08T19:45:00.000Z'),
        createdAt: new Date('2026-10-08T19:45:00.000Z'),
        updatedAt: new Date('2026-10-08T19:45:00.000Z')
      },
      {
        ticketId: 'OB_PRIYA_01',
        transactionId: 'TXN_20261008_OBPRIYA01',
        userId: priyaId,
        userName: 'Priya Sharma',
        userEmail: 'priya@onbus.in',
        userPhone: '9123456789',
        busId: 'B203_4',
        busNumber: '203',
        operator: 'BEST',
        busType: 'AC',
        route: {
          from: 'Dahisar',
          to: 'Andheri Station',
          stops: [
            'Dahisar',
            'Borivali Station',
            'Kandivali Station',
            'Mindspace Malad',
            'Andheri Station'
          ]
        },
        boardingStop: 'Dahisar',
        droppingStop: 'Andheri Station',
        locationPath: [
          { lat: 19.257, lng: 72.859 },
          { lat: 19.2307, lng: 72.8567 },
          { lat: 19.2046, lng: 72.8468 },
          { lat: 19.1783, lng: 72.834 },
          { lat: 19.1197, lng: 72.8466 }
        ],
        currentBusLocation: { lat: 19.1783, lng: 72.8352 },
        departure: '08:00',
        departureTime: '08:00',
        arrival: '09:00',
        arrivalTime: '09:00',
        date: '2026-10-08',
        travelDate: '2026-10-08',
        seats: ['2D'],
        seatCount: 1,
        fare: 25,
        farePerSeat: 25,
        totalFare: 25,
        totalAmount: 25,
        paymentMethod: 'UPI',
        paymentMode: 'UPI',
        paymentStatus: 'PAID',
        status: 'CONFIRMED',
        bookingStatus: 'CONFIRMED',
        bookedAt: new Date('2026-10-08T15:22:47.930Z'),
        createdAt: new Date('2026-10-08T15:22:47.930Z'),
        updatedAt: new Date('2026-10-08T15:22:47.930Z')
      }
    ]

    await bookingsCollection.insertMany(sampleBookings).catch(() => {})

    for (const b of sampleBookings) {
      await transactionsCollection.insertOne({
        transactionId: b.transactionId,
        ticketId: b.ticketId,
        userId: b.userId,
        userName: b.userName,
        userEmail: b.userEmail,
        userPhone: b.userPhone,
        amount: b.totalAmount,
        currency: 'INR',
        paymentMode: b.paymentMode,
        paymentStatus: b.paymentStatus,
        bookingStatus: b.bookingStatus,
        tripDate: b.travelDate,
        departureTime: b.departureTime,
        route: b.route,
        timestamp: b.bookedAt,
        reference: b.paymentMode === 'CASH' ? 'CASH_CONDUCTOR_COLLECTION' : 'PG_MUMBAI_TRANSIT'
      }).catch(() => {})
    }
  }
}

async function ensureIndexesAndSeed(db) {
  try {
    await Promise.all([
      db.collection('users').createIndex({ email: 1 }, { unique: true }),
      db.collection('users').createIndex({ username: 1 }, { unique: true }),
      db.collection('users').createIndex({ phone: 1 }),
      db.collection('bookings').createIndex({ ticketId: 1 }, { unique: true }),
      db.collection('bookings').createIndex({ userId: 1, bookedAt: -1 }),
      db.collection('bookings').createIndex({ busId: 1, date: 1, departure: 1, status: 1 }),
      db.collection('booking_seats').createIndex(
        { busId: 1, date: 1, departure: 1, seat: 1 },
        { unique: true }
      ),
      db.collection('booking_seats').createIndex({ claimId: 1 }),
      db.collection('sessions').createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
      db.collection('sessions').createIndex({ tokenHash: 1 }, { unique: true }),
      db.collection('transactions').createIndex({ transactionId: 1 }, { unique: true }),
      db.collection('transactions').createIndex({ userId: 1, timestamp: -1 }),
      db.collection('search_history').createIndex({ userId: 1, searchedAt: -1 }),
      db.collection('activity_logs').createIndex({ userId: 1, timestamp: -1 })
    ])
  } catch (err) {
    console.warn('Index creation warning:', err.message)
  }

  await seedDefaultData(db)
}

export async function readJsonBody(req) {
  if (req.body !== undefined) {
    if (typeof req.body === 'string') {
      try {
        return JSON.parse(req.body || '{}')
      } catch {
        throw Object.assign(new Error('Request body must be valid JSON'), { statusCode: 400 })
      }
    }
    return req.body || {}
  }

  return new Promise((resolve, reject) => {
    let body = ''
    let tooLarge = false
    req.on('data', (chunk) => {
      body += chunk
      if (body.length > 1024 * 1024) tooLarge = true
    })
    req.on('end', () => {
      if (tooLarge) {
        reject(Object.assign(new Error('Request body is too large'), { statusCode: 413 }))
        return
      }
      try {
        resolve(JSON.parse(body || '{}'))
      } catch {
        reject(Object.assign(new Error('Request body must be valid JSON'), { statusCode: 400 }))
      }
    })
    req.on('error', reject)
  })
}

export function requestUrl(req) {
  return new URL(req.url || '/', `https://${req.headers?.host || 'localhost'}`)
}

export function sendJson(res, statusCode, data, headers = {}) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  for (const [name, value] of Object.entries(headers)) res.setHeader(name, value)
  res.end(JSON.stringify(data))
}

export function safeUser(user) {
  if (!user) return null
  return {
    id: (user._id || user.id || '').toString(),
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone || '',
    role: user.role || 'passenger'
  }
}

function hashToken(token) {
  return createHash('sha256').update(token).digest('hex')
}

function cookieToken(req) {
  const authHeader = req.headers?.authorization || req.headers?.Authorization || ''
  if (typeof authHeader === 'string' && authHeader.startsWith('Bearer ')) {
    return authHeader.slice(7).trim()
  }
  const cookieHeader = req.headers?.cookie || ''
  const cookie = cookieHeader.split(';').map(value => value.trim())
    .find(value => value.startsWith(`${SESSION_COOKIE}=`))
  return cookie ? decodeURIComponent(cookie.slice(SESSION_COOKIE.length + 1)) : ''
}

export async function createSession(db, userId) {
  const token = randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS)
  await db.collection('sessions').insertOne({
    tokenHash: hashToken(token),
    userId: userId.toString(),
    createdAt: new Date(),
    expiresAt
  })

  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  const cookie = `${SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${Math.floor(SESSION_DURATION_MS / 1000)}${secure}`
  return { cookie, token }
}

export async function getAuthenticatedUser(req, db) {
  const token = cookieToken(req)
  if (!token) return null

  const session = await db.collection('sessions').findOne({
    tokenHash: hashToken(token),
    expiresAt: { $gt: new Date() }
  })
  if (!session) return null

  const userQuery = [
    ObjectId.isValid(session.userId) ? { _id: new ObjectId(session.userId) } : null,
    { _id: session.userId },
    { id: session.userId }
  ].filter(Boolean)

  return db.collection('users').findOne({ $or: userQuery })
}

export async function deleteSession(req, db) {
  const token = cookieToken(req)
  if (token) {
    await db.collection('sessions').deleteOne({ tokenHash: hashToken(token) })
  }
}

export function clearSessionCookie() {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure}`
}

export function internalError(res, customMessage) {
  console.error('ON BUS API request failed:', customMessage || '')
  sendJson(res, 500, {
    success: false,
    error: customMessage || 'The service is temporarily unavailable. Please try again.'
  })
}
