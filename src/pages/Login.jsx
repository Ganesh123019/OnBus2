import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useToastCtx } from '../components/Layout'
import styles from './Auth.module.css'

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, isLoggedIn, login, logout } = useAuth()
  const toast = useToastCtx()

  const [email, setEmail] = useState(() => location.state?.registeredEmail || '')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const redirectPath = location.state?.from || '/tickets'
  const successMsg = location.state?.message

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password) {
      setError('Please fill in both email and password')
      return
    }

    setLoading(true)
    const res = login(email.trim(), password)
    setLoading(false)

    if (res.success) {
      if (toast?.success) toast.success(`Welcome back, ${res.user.name.split(' ')[0]}!`)
      navigate(redirectPath, { replace: true })
    } else {
      setError(res.error || 'Failed to sign in')
    }
  }

  function fillDemo(demoEmail, demoPass) {
    setEmail(demoEmail)
    setPassword(demoPass)
    setError('')
  }

  // If already logged in, show user status card instead of blank login
  if (isLoggedIn) {
    return (
      <div className={styles.authPage}>
        <div className={styles.authCard} style={{ textAlign: 'center' }}>
          <div className={styles.logoBadge}>✅</div>
          <h1 className={styles.authTitle}>Already Signed In</h1>
          <p className={styles.authSubtitle} style={{ marginTop: '8px' }}>
            You are currently signed in as <strong style={{ color: 'var(--text-primary)' }}>{user?.name}</strong>
          </p>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
            {user?.email}
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '28px' }}>
            <Link to="/" className="btn btn-primary" style={{ flex: 1 }}>
              Go to Home
            </Link>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ flex: 1 }}
              onClick={() => {
                logout()
                if (toast?.info) toast.info('Signed out')
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.authCard}>
        <div className={styles.authHeader}>
          <div className={styles.logoBadge}>🚌</div>
          <h1 className={styles.authTitle}>Sign in to ON BUS</h1>
          <p className={styles.authSubtitle}>Access live tracking, seat bookings & mobile tickets</p>
        </div>

        {successMsg && (
          <div style={{
            padding: '12px 14px',
            background: 'rgba(34, 211, 160, 0.12)',
            border: '1px solid rgba(34, 211, 160, 0.3)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--accent-green)',
            fontSize: '13px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span>✓</span>
            <span>{successMsg}</span>
          </div>
        )}

        {error && (
          <div className={styles.errorAlert} role="alert">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="input-group">
            <label className="input-label" htmlFor="login-email">Email Address</label>
            <input
              id="login-email"
              type="email"
              className="input"
              placeholder="name@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="input-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label className="input-label" htmlFor="login-password">Password</label>
            </div>
            <div className={styles.passwordWrap}>
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                className="input"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
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

          <button
            type="submit"
            className="btn btn-primary btn-full btn-lg"
            disabled={loading}
            style={{ marginTop: '8px' }}
          >
            {loading ? <span className="spinner" style={{ width: 18, height: 18 }} /> : 'Sign In'}
          </button>
        </form>

        {/* Quick Demo Accounts */}
        <div className={styles.demoBox}>
          <div className={styles.demoTitle}>
            <span>⚡ Quick Demo Login</span>
          </div>
          <div className={styles.demoButtons}>
            <button
              type="button"
              className={styles.demoBtn}
              onClick={() => fillDemo('priya@onbus.in', 'priya123')}
            >
              <span className={styles.demoName}>Priya Sharma</span>
              <span className={styles.demoRole}>Frequent Commuter</span>
            </button>
            <button
              type="button"
              className={styles.demoBtn}
              onClick={() => fillDemo('demo@onbus.in', 'demo123')}
            >
              <span className={styles.demoName}>Demo User</span>
              <span className={styles.demoRole}>Standard Account</span>
            </button>
          </div>
        </div>

        <div className={styles.authFooter}>
          Don't have an account yet?
          <Link to="/register" state={{ from: redirectPath }} className={styles.authLink}>
            Create account
          </Link>
        </div>
      </div>
    </div>
  )
}
