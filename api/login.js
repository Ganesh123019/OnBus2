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

export default async function login(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    sendJson(res, 405, { success: false, error: 'Method not allowed' })
    return
  }

  try {
    const body = await readJsonBody(req)
    const identifier = clean(body.identifier || body.email).toLowerCase()
    const password = typeof body.password === 'string' ? body.password : ''
    if (!identifier || !password) {
      sendJson(res, 400, { success: false, error: 'Email and password are required' })
      return
    }

    const db = await getDatabase()
    const user = await db.collection('users').findOne({
      $or: [{ email: identifier }, { username: identifier }]
    })
    if (!user || !(await bcrypt.compare(password, user.passwordHash || user.password || ''))) {
      sendJson(res, 401, { success: false, error: 'Invalid email or password' })
      return
    }

    await db.collection('users').updateOne({ _id: user._id }, { $set: { lastLogin: new Date() } })
    const { cookie, token } = await createSession(db, user._id)
    sendJson(res, 200, { success: true, user: safeUser(user), token }, { 'Set-Cookie': cookie })
  } catch (error) {
    if (error.statusCode) {
      sendJson(res, error.statusCode, { success: false, error: error.message })
      return
    }
    console.error('Login error:', error)
    internalError(res, error.message)
  }
}
