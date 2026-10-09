import {
  clearSessionCookie,
  deleteSession,
  getAuthenticatedUser,
  getDatabase,
  internalError,
  readJsonBody,
  safeUser,
  sendJson
} from './lib/mongodb.js'

export default async function session(req, res) {
  if (!['GET', 'PATCH', 'DELETE'].includes(req.method)) {
    res.setHeader('Allow', 'GET, PATCH, DELETE')
    sendJson(res, 405, { success: false, error: 'Method not allowed' })
    return
  }

  try {
    const db = await getDatabase()
    if (req.method === 'DELETE') {
      await deleteSession(req, db)
      sendJson(res, 200, { success: true }, { 'Set-Cookie': clearSessionCookie() })
      return
    }

    const user = await getAuthenticatedUser(req, db)
    if (!user) {
      sendJson(res, 200, { success: true, user: null })
      return
    }

    if (req.method === 'PATCH') {
      const body = await readJsonBody(req)
      const updates = {}
      if (typeof body.name === 'string' && body.name.trim()) updates.name = body.name.trim()
      if (typeof body.phone === 'string') {
        const phone = body.phone.trim().replace(/\D/g, '')
        if (phone && phone.length !== 10) {
          sendJson(res, 400, { success: false, error: 'Phone number must contain 10 digits' })
          return
        }
        updates.phone = phone
      }
      if (Object.keys(updates).length > 0) {
        await db.collection('users').updateOne({ _id: user._id }, { $set: updates })
        Object.assign(user, updates)
      }
    }

    sendJson(res, 200, { success: true, user: safeUser(user) })
  } catch (error) {
    if (error.statusCode) {
      sendJson(res, error.statusCode, { success: false, error: error.message })
      return
    }
    console.error('Session error:', error)
    internalError(res, error.message)
  }
}
