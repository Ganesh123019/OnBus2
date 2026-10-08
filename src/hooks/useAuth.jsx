// ON BUS V2 — Centralized Authentication Context & Hook
import { createContext, useContext, useState, useCallback } from 'react'

const STORAGE_KEY = 'onbus_user'

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

  const login = useCallback(async (email, password) => {
    const cleanEmail = (email || '').trim().toLowerCase()
    const cleanPassword = (password || '').toString()

    if (!cleanEmail || !cleanPassword) {
      return { success: false, error: 'Email and password are required' }
    }

    try {
      const response = await fetch('/api/db/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: cleanEmail, password: cleanPassword })
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        return { success: false, error: result.error || 'Login failed. Please try again.' }
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(result.user))
      setUser(result.user)
      return { success: true, user: result.user }
    } catch (err) {
      return { success: false, error: 'Authentication service is unavailable. Please try again.' }
    }
  }, [])

  const register = useCallback(async (name, email, password, phone) => {
    const cleanName = (name || '').trim()
    const cleanEmail = (email || '').trim().toLowerCase()
    const cleanPassword = (password || '').toString()
    const cleanPhone = (phone || '').trim()

    if (!cleanName || !cleanEmail || !cleanPassword) {
      return { success: false, error: 'Please fill in all required fields' }
    }

    try {
      const response = await fetch('/api/db/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          username: cleanEmail.split('@')[0],
          email: cleanEmail,
          phone: cleanPhone,
          password: cleanPassword
        })
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        return { success: false, error: result.error || 'Registration failed. Please try again.' }
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(result.user))
      setUser(result.user)
      return { success: true, user: result.user }
    } catch (err) {
      return { success: false, error: 'Registration service is unavailable. Please try again.' }
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
