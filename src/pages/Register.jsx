import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useToastCtx } from '../components/Layout'
import styles from './Auth.module.css'

export default function Register() {
  const navigate = useNavigate()
  const location = useLocation()
  const { register } = useAuth()
  const toast = useToastCtx()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const redirectPath = location.state?.from || '/'

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!name.trim() || !email.trim() || !password) {
      setError('Please fill in all required fields')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)
    const res = register(name, email, password, phone)
    setLoading(false)

    if (res.success) {
      if (toast?.success) toast.success(`Account created! Welcome, ${res.user.name.split(' ')[0]}!`)
      navigate(redirectPath, { replace: true })
    } else {
      setError(res.error || 'Failed to create account')
    }
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.authCard}>
        <div className={styles.authHeader}>
          <div className={styles.logoBadge}>🚌</div>
          <h1 className={styles.authTitle}>Create an Account</h1>
          <p className={styles.authSubtitle}>Get instant bus tickets and real-time tracking in Mumbai</p>
        </div>

        {error && (
          <div className={styles.errorAlert} role="alert">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="input-group">
            <label className="input-label" htmlFor="register-name">Full Name *</label>
            <input
              id="register-name"
              type="text"
              className="input"
              placeholder="e.g. Rahul Deshmukh"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="register-email">Email Address *</label>
            <input
              id="register-email"
              type="email"
              className="input"
              placeholder="rahul@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="register-phone">Mobile Phone (Optional)</label>
            <input
              id="register-phone"
              type="tel"
              className="input"
              placeholder="9876543210"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="register-password">Password (min. 6 chars) *</label>
            <div className={styles.passwordWrap}>
              <input
                id="register-password"
                type={showPassword ? 'text' : 'password'}
                className="input"
                placeholder="Choose a strong password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="register-confirm">Confirm Password *</label>
            <input
              id="register-confirm"
              type={showPassword ? 'text' : 'password'}
              className="input"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-full btn-lg"
            disabled={loading}
            style={{ marginTop: '8px' }}
          >
            {loading ? <span className="spinner" style={{ width: 18, height: 18 }} /> : 'Create Account'}
          </button>
        </form>

        <div className={styles.authFooter}>
          Already have an account?
          <Link to="/login" state={{ from: redirectPath }} className={styles.authLink}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
