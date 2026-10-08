// ON BUS V2 — Centralized Authentication Context & Hook
import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'onbus_user'
const USERS_KEY = 'onbus_users'

// Demo users pre-seeded
export const DEMO_USERS = [
  { id: 'user_demo', name: 'Demo User', email: 'demo@onbus.in', password: 'demo123', phone: '9876543210' },
  { id: 'user_1', name: 'Priya Sharma', email: 'priya@onbus.in', password: 'priya123', phone: '9123456789' }
]

function getStoredUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY)
    if (!raw) {
      localStorage.setItem(USERS_KEY, JSON.stringify(DEMO_USERS))
      return [...DEMO_USERS]
    }
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) {
      localStorage.setItem(USERS_KEY, JSON.stringify(DEMO_USERS))
      return [...DEMO_USERS]
    }
    // Ensure demo accounts are always present without wiping registered users
    let changed = false
    DEMO_USERS.forEach(demo => {
      if (!parsed.some(u => u.email.toLowerCase() === demo.email.toLowerCase())) {
        parsed.push(demo)
        changed = true
      }
    })
    if (changed) {
      localStorage.setItem(USERS_KEY, JSON.stringify(parsed))
    }
    return parsed
  } catch {
    return [...DEMO_USERS]
  }
}

function getStoredActiveUser() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  // Synchronous initialization prevents flash of unauthenticated state
  const [user, setUser] = useState(getStoredActiveUser)
  const [loading, setLoading] = useState(false)

  // Ensure users store is initialized
  useEffect(() => {
    getStoredUsers()
  }, [])

  const login = useCallback((email, password) => {
    try {
      const cleanEmail = (email || '').trim().toLowerCase()
      const cleanPassword = (password || '').toString()

      if (!cleanEmail || !cleanPassword) {
        return { success: false, error: 'Email and password are required' }
      }

      const users = getStoredUsers()
      const found = users.find(u =>
        u.email.trim().toLowerCase() === cleanEmail && u.password === cleanPassword
      )

      if (found) {
        const { password: _, ...safeUser } = found
        localStorage.setItem(STORAGE_KEY, JSON.stringify(safeUser))
        setUser(safeUser)

        fetch('/api/db/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ identifier: cleanEmail, password: cleanPassword })
        }).catch(() => {})

        return { success: true, user: safeUser }
      }

      // Check if email was found but wrong password
      const emailExists = users.some(u => u.email.trim().toLowerCase() === cleanEmail)
      if (emailExists) {
        return { success: false, error: 'Incorrect password. Please try again.' }
      }

      return { success: false, error: 'No account found with this email. Please register first.' }
    } catch (err) {
      return { success: false, error: 'Authentication error. Please try again.' }
    }
  }, [])

  const register = useCallback((name, email, password, phone) => {
    try {
      const cleanName = (name || '').trim()
      const cleanEmail = (email || '').trim().toLowerCase()
      const cleanPassword = (password || '').toString()
      const cleanPhone = (phone || '').trim()

      if (!cleanName || !cleanEmail || !cleanPassword) {
        return { success: false, error: 'Please fill in all required fields' }
      }

      const users = getStoredUsers()
      const exists = users.find(u => u.email.trim().toLowerCase() === cleanEmail)
      if (exists) {
        return { success: false, error: 'An account with this email already exists. Please sign in instead.' }
      }

      const newUser = {
        id: `user_${Date.now()}`,
        username: cleanEmail.split('@')[0],
        name: cleanName,
        email: cleanEmail,
        password: cleanPassword,
        phone: cleanPhone
      }

      users.push(newUser)
      localStorage.setItem(USERS_KEY, JSON.stringify(users))

      const { password: _, ...safeUser } = newUser
      localStorage.setItem(STORAGE_KEY, JSON.stringify(safeUser))
      setUser(safeUser)

      fetch('/api/db/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          username: cleanEmail.split('@')[0],
          email: cleanEmail,
          phone: cleanPhone,
          password: cleanPassword
        })
      }).catch(() => {})

      return { success: true, user: safeUser }
    } catch (err) {
      return { success: false, error: 'Registration failed. Please try again.' }
    }
  }, [])

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch { /* ignore */ }
    setUser(null)
  }, [])

  const updateProfile = useCallback((updates) => {
    try {
      if (!user) return { success: false, error: 'No active session' }
      const updated = { ...user, ...updates }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))

      const users = getStoredUsers()
      const idx = users.findIndex(u => u.id === user.id)
      if (idx >= 0) {
        users[idx] = { ...users[idx], ...updates }
        localStorage.setItem(USERS_KEY, JSON.stringify(users))
      }

      setUser(updated)
      return { success: true }
    } catch {
      return { success: false, error: 'Update failed' }
    }
  }, [user])

  const value = {
    user,
    isLoggedIn: !!user,
    loading,
    login,
    register,
    logout,
    updateProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
