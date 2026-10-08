import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import styles from './Navbar.module.css'

function BusLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="url(#navGrad)"/>
      <rect x="5" y="8" width="22" height="13" rx="3" fill="white" fillOpacity="0.95"/>
      <rect x="7" y="10" width="18" height="6" rx="1.5" fill="#0099cc" fillOpacity="0.5"/>
      <circle cx="10" cy="23" r="2.5" fill="white"/>
      <circle cx="22" cy="23" r="2.5" fill="white"/>
      <rect x="8" y="20" width="16" height="3" fill="url(#navGrad)"/>
      <defs>
        <linearGradient id="navGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0077aa"/>
          <stop offset="1" stopColor="#00c9ff"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Navbar() {
  const { user, isLoggedIn, logout } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  function handleLogout() {
    logout()
    setProfileOpen(false)
    navigate('/')
  }

  const navItems = [
    { to: '/', label: 'Home', icon: '⌂', end: true },
    { to: '/find', label: 'Find a Bus', icon: '🔍' },
    { to: '/tickets', label: 'My Tickets', icon: '🎫' }
  ]

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <Link to="/" className={styles.brand} aria-label="ON BUS Home">
          <BusLogo />
          <span className={styles.brandName}>
            <span className={styles.brandOn}>ON</span>
            <span className={styles.brandBus}>BUS</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className={styles.links} role="list">
          {navItems.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.linkActive : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className={styles.right}>
          {isLoggedIn ? (
            <div className={styles.profileWrap}>
              <button
                className={styles.profileBtn}
                onClick={() => setProfileOpen(o => !o)}
                aria-expanded={profileOpen}
                aria-label="User menu"
              >
                <span className={styles.avatar}>
                  {user.name.charAt(0).toUpperCase()}
                </span>
                <span className={styles.userName}>{user.name.split(' ')[0]}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              {profileOpen && (
                <>
                  <div className={styles.profileOverlay} onClick={() => setProfileOpen(false)} />
                  <div className={styles.dropdown} role="menu">
                    <div className={styles.dropdownHeader}>
                      <span className={styles.dropdownName}>{user.name}</span>
                      <span className={styles.dropdownEmail}>{user.email}</span>
                    </div>
                    <div className={styles.dropdownDivider} />
                    <Link
                      to="/tickets"
                      className={styles.dropdownItem}
                      role="menuitem"
                      onClick={() => setProfileOpen(false)}
                    >
                      🎫 My Tickets
                    </Link>
                    <button
                      className={`${styles.dropdownItem} ${styles.dropdownLogout}`}
                      onClick={handleLogout}
                      role="menuitem"
                    >
                      ← Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className={styles.authButtons}>
              <Link to="/login" className="btn btn-ghost btn-sm">Sign In</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Get Started</Link>
            </div>
          )}

          {/* Mobile menu toggle */}
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div className={styles.mobileOverlay} onClick={() => setMenuOpen(false)} />
          <div className={styles.mobileMenu}>
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                <span className={styles.mobileLinkIcon}>{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
            <div className={styles.mobileDivider} />
            {isLoggedIn ? (
              <>
                <div className={styles.mobileUser}>Signed in as <strong>{user.name}</strong></div>
                <button
                  className={`${styles.mobileLink} ${styles.mobileLinkLogout}`}
                  onClick={() => { handleLogout(); setMenuOpen(false) }}
                >
                  ← Sign Out
                </button>
              </>
            ) : (
              <div className={styles.mobileAuth}>
                <Link to="/login" className="btn btn-secondary btn-full" onClick={() => setMenuOpen(false)}>Sign In</Link>
                <Link to="/register" className="btn btn-primary btn-full" onClick={() => setMenuOpen(false)}>Get Started</Link>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  )
}
