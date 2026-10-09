// ON BUS V2 — Centralized Authentication Context & Hook
import { createContext, useContext, useEffect, useState, useCallback } from 'react'

export const AuthContext = createContext(null)

function getAuthHeaders() {
  const headers = { 'Content-Type': 'application/json' }
  try {
    const token = localStorage.getItem('onbus_token')
    if (token) headers['Authorization'] = `Bearer ${token}`
  } catch {}
  return headers
}

async function readResponse(response, fallbackMessage) {
  let result
  try {
    result = await response.json()
  } catch {
    throw new Error(fallbackMessage)
  }
  if (!response.ok || !result.success) {
    throw new Error(result.error || fallbackMessage)
  }
  return result
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('onbus_user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    fetch('/api/session', { headers: getAuthHeaders() })
      .then(response => readResponse(response, 'Unable to restore your session'))
      .then(result => {
        if (active) {
          setUser(result.user || null)
          if (result.user) {
            try { localStorage.setItem('onbus_user', JSON.stringify(result.user)) } catch {}
          } else {
            try {
              localStorage.removeItem('onbus_user')
              localStorage.removeItem('onbus_token')
            } catch {}
          }
        }
      })
      .catch(error => {
        console.error('Session restore failed:', error)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => { active = false }
  }, [])

  const login = useCallback(async (email, password) => {
    const cleanEmail = (email || '').trim().toLowerCase()
    const cleanPassword = (password || '').toString()
    if (!cleanEmail || !cleanPassword) {
      return { success: false, error: 'Email and password are required' }
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ identifier: cleanEmail, password: cleanPassword })
      })
      const result = await readResponse(response, 'Login failed. Please try again.')
      setUser(result.user)
      if (result.token) {
        try { localStorage.setItem('onbus_token', result.token) } catch {}
      }
      if (result.user) {
        try { localStorage.setItem('onbus_user', JSON.stringify(result.user)) } catch {}
      }
      return { success: true, user: result.user }
    } catch (error) {
      return { success: false, error: error.message || 'Authentication service is unavailable. Please try again.' }
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
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          name: cleanName,
          username: cleanEmail.split('@')[0],
          email: cleanEmail,
          phone: cleanPhone,
          password: cleanPassword
        })
      })
      const result = await readResponse(response, 'Registration failed. Please try again.')
      setUser(result.user)
      if (result.token) {
        try { localStorage.setItem('onbus_token', result.token) } catch {}
      }
      if (result.user) {
        try { localStorage.setItem('onbus_user', JSON.stringify(result.user)) } catch {}
      }
      return { success: true, user: result.user }
    } catch (error) {
      return { success: false, error: error.message || 'Registration service is unavailable. Please try again.' }
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    const token = (() => {
      try { return localStorage.getItem('onbus_token') } catch { return null }
    })()
    try {
      localStorage.removeItem('onbus_token')
      localStorage.removeItem('onbus_user')
    } catch {}

    fetch('/api/session', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    })
      .then(response => readResponse(response, 'Unable to end your session'))
      .catch(error => console.error('Logout failed:', error))
  }, [])

  const updateProfile = useCallback(async (updates) => {
    if (!user) return { success: false, error: 'No active session' }
    try {
      const response = await fetch('/api/session', {
        method: 'PATCH',
        headers: getAuthHeaders(),
        body: JSON.stringify(updates)
      })
      const result = await readResponse(response, 'Profile update failed')
      setUser(result.user)
      if (result.user) {
        try { localStorage.setItem('onbus_user', JSON.stringify(result.user)) } catch {}
      }
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message || 'Profile update failed' }
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
