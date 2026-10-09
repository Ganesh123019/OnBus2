import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BUSES, getAppStats } from '../data/buses'
import BusCard from '../components/BusCard'
import StatusBadge from '../components/StatusBadge'
import { useAvailableSeats } from '../hooks/useAvailableSeats'
import styles from './Home.module.css'

function StatCard({ value, label, icon, accent }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statIcon} style={{ color: accent }}>
        {icon}
      </div>
      <div className={styles.statValue} style={{ color: accent }}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  )
}

function LiveBusRow({ bus }) {
  const seats = useAvailableSeats(bus)
  return (
    <Link to={`/bus/${bus.id}`} className={styles.liveRow}>
      <div className={styles.liveRowLeft}>
        <span className={styles.liveNum} style={{ color: bus.color }}>
          {bus.number}
        </span>
        <div>
          <div className={styles.liveRoute}>
            {bus.route.from.split(' ')[0]} → {bus.route.to.split(' ')[0]}
          </div>
          <div className={styles.liveInfo}>{bus.busType} • {seats} seats available</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <StatusBadge status={bus.status} />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </div>
    </Link>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const stats = getAppStats()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleSearch(e) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (from) params.set('from', from)
    if (to) params.set('to', to)
    navigate(`/find?${params.toString()}`)
  }

  function swapStops() {
    setFrom(to)
    setTo(from)
  }

  const liveBuses = BUSES.filter(b => ['LIVE', 'ON TIME', 'ARRIVING'].includes(b.status)).slice(0, 5)
  const featuredBuses = BUSES.slice(0, 3)

  return (
    <div className={styles.page}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        {/* Background glow */}
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.glow1} />
          <div className={styles.glow2} />
          <div className={styles.grid} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          {/* Hero text */}
          <div className={styles.heroText}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Mumbai Smart Transit System
            </div>
            <h1 className={styles.heroTitle}>
              Move Smarter.
              <br />
              <span className={styles.heroTitleAccent}>Travel Better.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Real-time Mumbai BEST bus tracking, live seat availability,
              seamless booking — all in one place.
            </p>
            <div className={styles.heroCta}>
              <Link to="/find" className="btn btn-primary btn-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                Find a Bus
              </Link>
              <Link to="/tickets" className="btn btn-secondary btn-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 9a3 3 0 010 6v2a2 2 0 002 2h16a2 2 0 002-2v-2a3 3 0 010-6V7a2 2 0 00-2-2H4a2 2 0 00-2 2v2z"/>
                </svg>
                My Bookings & Pass
              </Link>
            </div>
          </div>

          {/* Quick Search Card */}
          <div className={styles.searchCard}>
            <div className={styles.searchCardHeader}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <span>Quick Search</span>
            </div>
            <form onSubmit={handleSearch} className={styles.searchForm}>
              <div className={styles.searchFields}>
                <div className="input-group">
                  <label className="input-label">From</label>
                  <div className="input-icon-wrap">
                    <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="10"/>
                    </svg>
                    <input
                      type="text"
                      className="input"
                      placeholder="Borivali, Andheri..."
                      value={from}
                      onChange={e => setFrom(e.target.value)}
                      aria-label="From location"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={swapStops}
                  className={styles.swapBtn}
                  aria-label="Swap from and to"
                  title="Swap stops"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/>
                  </svg>
                </button>

                <div className="input-group">
                  <label className="input-label">To</label>
                  <div className="input-icon-wrap">
                    <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <input
                      type="text"
                      className="input"
                      placeholder="Dadar, Bandra..."
                      value={to}
                      onChange={e => setTo(e.target.value)}
                      aria-label="To location"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: '8px' }}>
                Search Buses →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <StatCard value={stats.activeBuses} label="Active Buses" icon="🚌" accent="var(--accent-blue)" />
            <StatCard value={stats.routes} label="Routes" icon="🛣" accent="var(--accent-green)" />
            <StatCard value={stats.totalBuses} label="Total Fleet" icon="🏙" accent="var(--accent-indigo)" />
            <StatCard value={stats.avgETA} label="Avg. ETA" icon="⏱" accent="var(--accent-orange)" />
          </div>
        </div>
      </section>

      {/* ── LIVE BUSES ── */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>
              <span className={styles.liveIndicator} aria-hidden="true" />
              Live Buses
            </h2>
            <p className={styles.sectionDesc}>Currently active buses on Mumbai routes</p>
          </div>
          <Link to="/find" className="btn btn-secondary btn-sm">
            Browse All Buses →
          </Link>
        </div>
        <div className={styles.liveList}>
          {liveBuses.map(bus => (
            <LiveBusRow key={bus.id} bus={bus} />
          ))}
        </div>
      </section>

      {/* ── FEATURED BUSES ── */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Popular Routes</h2>
            <p className={styles.sectionDesc}>Frequently used Mumbai bus routes</p>
          </div>
          <Link to="/find" className="btn btn-secondary btn-sm">
            See All →
          </Link>
        </div>
        <div className={styles.busGrid}>
          {featuredBuses.map(bus => (
            <BusCard key={bus.id} bus={bus} />
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className={`${styles.section} container`}>
        <div className={styles.featuresGrid}>
          {[
            {
              icon: '🗺',
              title: 'Live Bus Tracking',
              desc: 'Real-time GPS positions for every active BEST bus in Mumbai.',
              color: 'var(--accent-blue)'
            },
            {
              icon: '🎫',
              title: 'Instant Booking',
              desc: 'Book your seat in seconds with our seamless booking flow.',
              color: 'var(--accent-green)'
            },
            {
              icon: '🔔',
              title: 'Smart Alerts',
              desc: 'Get notified about delays, route changes, and arrivals.',
              color: 'var(--accent-orange)'
            },
            {
              icon: '📱',
              title: 'Mobile First',
              desc: 'Designed to be fast and beautiful on your phone.',
              color: 'var(--accent-indigo)'
            }
          ].map(f => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.featureIcon} style={{ color: f.color, borderColor: `${f.color}22`, background: `${f.color}11` }}>
                <span role="img" aria-label={f.title}>{f.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="container" style={{ paddingBottom: '80px' }}>
        <div className={styles.ctaBanner}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>
              Ready to ride smarter?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Join thousands of Mumbai commuters already using ON BUS.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/register" className="btn btn-primary">
              Create Account
            </Link>
            <Link to="/find" className="btn btn-secondary">
              Browse Buses
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
