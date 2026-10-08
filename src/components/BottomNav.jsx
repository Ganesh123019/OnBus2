import { NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import styles from './BottomNav.module.css'

const navItems = [
  { to: '/', label: 'Home', end: true, icon: HomeIcon },
  { to: '/find', label: 'Find', icon: SearchIcon },
  { to: '/tickets', label: 'Tickets', icon: TicketIcon, protected: true }
]

function HomeIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  )
}

function SearchIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )
}

function MapIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2"/>
      <line x1="8" y1="2" x2="8" y2="18"/>
      <line x1="16" y1="6" x2="16" y2="22"/>
    </svg>
  )
}

function TicketIcon({ active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9a3 3 0 010 6v2a2 2 0 002 2h16a2 2 0 002-2v-2a3 3 0 010-6V7a2 2 0 00-2-2H4a2 2 0 00-2 2v2z"/>
    </svg>
  )
}

export default function BottomNav() {
  const { isLoggedIn } = useAuth()

  return (
    <nav className={styles.nav} role="navigation" aria-label="Mobile navigation">
      {navItems.map(({ to, label, end, icon: Icon, protected: prot }) => (
        <NavLink
          key={to}
          to={prot && !isLoggedIn ? '/login' : to}
          end={end}
          className={({ isActive }) =>
            `${styles.item} ${isActive ? styles.itemActive : ''}`
          }
          aria-label={label}
        >
          {({ isActive }) => (
            <>
              <span className={styles.icon}>
                <Icon active={isActive} />
              </span>
              <span className={styles.label}>{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
