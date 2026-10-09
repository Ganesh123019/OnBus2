import bcrypt from 'bcryptjs'
import {
  createSession,
  getDatabase,
  internalError,
  readJsonBody,
  safeUser,
  sendJson
} from './lib/mongodb.js'

function clean(value) {
  return typeof value === 'string' ? value.trim() : ''
}

export default async function register(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    sendJson(res, 405, { success: false, error: 'Method not allowed' })
    return
  }

  try {
    const body = await readJsonBody(req)
    const name = clean(body.name)
    const email = clean(body.email).toLowerCase()
    const username = clean(body.username || email.split('@')[0]).toLowerCase()
    const phone = clean(body.phone).replace(/\D/g, '')
    const password = typeof body.password === 'string' ? body.password : ''

    if (!name || !email || !password) {
      sendJson(res, 400, { success: false, error: 'Name, email, and password are required' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      sendJson(res, 400, { success: false, error: 'A valid email address is required' })
      return
    }
    if (password.length < 6 || password.length > 128) {
      sendJson(res, 400, { success: false, error: 'Password must contain 6 to 128 characters' })
      return
    }
    if (phone && phone.length !== 10) {
      sendJson(res, 400, { success: false, error: 'Phone number must contain 10 digits' })
      return
    }

    const db = await getDatabase()
    const existing = await db.collection('users').findOne({
      $or: [{ email }, { username }]
    })
    if (existing) {
      const msg = existing.email === email
        ? 'An account with this email already exists'
        : 'An account with this username already exists'
      sendJson(res, 409, { success: false, error: msg })
      return
    }

    const passwordHash = await bcrypt.hash(password, 12)
    const user = {
      name,
      username,
      email,
      phone,
      password: passwordHash,
      passwordHash,
      role: 'passenger',
      createdAt: new Date(),
      lastLogin: new Date()
    }

    let result
    try {
      result = await db.collection('users').insertOne(user)
    } catch (error) {
      if (error.code === 11000) {
        sendJson(res, 409, { success: false, error: 'An account with this email or username already exists' })
        return
      }
      throw error
    }

    const createdUser = { ...user, _id: result.insertedId }
    const { cookie, token } = await createSession(db, result.insertedId)
    sendJson(res, 201, { success: true, user: safeUser(createdUser), token }, { 'Set-Cookie': cookie })
  } catch (error) {
    if (error.statusCode) {
      sendJson(res, error.statusCode, { success: false, error: error.message })
      return
    }
    console.error('Registration error:', error)
    internalError(res, error.message)
  }
}
