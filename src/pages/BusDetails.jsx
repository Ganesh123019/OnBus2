import { useParams, Link, useNavigate } from 'react-router-dom'
import { BUSES, getAvailableSeats } from '../data/buses'
import { useAuth } from '../hooks/useAuth'
import StatusBadge from '../components/StatusBadge'

export default function BusDetails() {
  const { busId } = useParams()
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()

  const bus = BUSES.find(b => b.id === busId)

  if (!bus) {
    return (
      <div className="container" style={{ padding: '60px 0' }}>
        <div className="empty-state">
          <div className="empty-state-icon">🚌</div>
          <div className="empty-state-title">Bus not found</div>
          <p className="empty-state-desc">The bus you're looking for doesn't exist or is no longer available.</p>
          <Link to="/find" className="btn btn-primary">Find Another Bus</Link>
        </div>
      </div>
    )
  }

  const availableSeats = getAvailableSeats(bus)
  const isFull = availableSeats <= 0
  const isBookable = !isFull && bus.status !== 'CANCELLED' && bus.status !== 'DEPARTED'

  function handleBook() {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: `/book/${bus.id}` } })
      return
    }
    navigate(`/book/${bus.id}`)
  }

  const now = new Date()
  const nextTrip = bus.schedule.find(s => {
    const [h, m] = s.departure.split(':').map(Number)
    return h > now.getHours() || (h === now.getHours() && m >= now.getMinutes())
  }) || bus.schedule[0]

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Header */}
      <div style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '24px 0'
      }}>
        <div className="container">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link to="/find" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Find a Bus</Link>
            <span>›</span>
            <span style={{ color: 'var(--text-secondary)' }}>Bus {bus.number}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* Bus icon */}
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '16px',
                background: `linear-gradient(135deg, ${bus.color}22, ${bus.color}44)`,
                border: `2px solid ${bus.color}33`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ fontSize: '20px', fontWeight: '900', color: bus.color, lineHeight: 1 }}>{bus.number}</span>
                <span style={{ fontSize: '9px', fontWeight: '700', color: bus.color, opacity: 0.7, letterSpacing: '0.05em' }}>BEST</span>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                  <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)' }}>
                    Bus {bus.number}
                  </h1>
                  <StatusBadge status={bus.status} />
                  {bus.amenities.includes('Electric') && (
                    <span className="badge badge-available">⚡ Electric</span>
                  )}
                  {bus.amenities.includes('Air Conditioned') && (
                    <span className="badge badge-arriving">❄ AC</span>
                  )}
                </div>
                <div style={{ fontSize: '15px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                  {bus.route.from} → {bus.route.to}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {bus.operator} • {bus.busType} • {bus.totalSeats} seats
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/find" className="btn btn-secondary">
                ← All Buses
              </Link>
              {isBookable ? (
                <button className="btn btn-primary" onClick={handleBook}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M2 9a3 3 0 010 6v2a2 2 0 002 2h16a2 2 0 002-2v-2a3 3 0 010-6V7a2 2 0 00-2-2H4a2 2 0 00-2 2v2z"/>
                  </svg>
                  Book Ticket
                </button>
              ) : (
                <span className="btn" style={{
                  background: 'rgba(255, 85, 113, 0.08)',
                  color: 'var(--accent-red)',
                  border: '1px solid rgba(255, 85, 113, 0.15)',
                  cursor: 'not-allowed'
                }}>
                  {isFull ? 'Bus Full' : 'Not Available'}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '32px var(--container-padding, 16px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '24px' }}>
          {/* Main content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: 0 }}>
            {/* Route map */}
            <div className="card">
              <h2 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px', color: 'var(--text-primary)' }}>
                Route & Stops
              </h2>
              <div style={{ position: 'relative' }}>
                {bus.route.stops.map((stop, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: idx === 0 || idx === bus.route.stops.length - 1 ? bus.color : 'var(--bg-elevated)',
                        border: `2px solid ${bus.color}`,
                        zIndex: 1
                      }} />
                      {idx < bus.route.stops.length - 1 && (
                        <div style={{
                          width: '2px',
                          height: '40px',
                          background: `linear-gradient(${bus.color}, ${bus.color}44)`,
                          marginTop: '2px'
                        }} />
                      )}
                    </div>
                    <div style={{ padding: '0 0 24px 0', flex: 1 }}>
                      <div style={{
                        fontSize: '14px',
                        fontWeight: idx === 0 || idx === bus.route.stops.length - 1 ? '700' : '500',
                        color: idx === 0 || idx === bus.route.stops.length - 1 ? 'var(--text-primary)' : 'var(--text-secondary)'
                      }}>
                        {stop}
                      </div>
                      {idx === 0 && nextTrip && (
                        <div style={{ fontSize: '12px', color: 'var(--accent-blue)', fontWeight: '600', marginTop: '2px' }}>
                          Departs {nextTrip.departure}
                        </div>
                      )}
                      {idx === bus.route.stops.length - 1 && nextTrip && (
                        <div style={{ fontSize: '12px', color: 'var(--accent-green)', fontWeight: '600', marginTop: '2px' }}>
                          Arrives {nextTrip.arrival}
                        </div>
                      )}
                      {idx > 0 && idx < bus.route.stops.length - 1 && (
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                          Intermediate stop
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="card">
              <h2 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>
                Today's Schedule
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                {bus.schedule.map((trip, idx) => {
                  const [h, m] = trip.departure.split(':').map(Number)
                  const isPast = h < now.getHours() || (h === now.getHours() && m < now.getMinutes())
                  const isNext = nextTrip && trip.departure === nextTrip.departure
                  return (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        background: isNext ? 'rgba(0, 201, 255, 0.06)' : 'transparent',
                        border: isNext ? '1px solid rgba(0, 201, 255, 0.15)' : '1px solid transparent',
                        opacity: isPast ? 0.45 : 1,
                        transition: 'all var(--transition)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ fontWeight: isNext ? '700' : '500', fontSize: '14px', color: isNext ? 'var(--accent-blue)' : 'var(--text-primary)' }}>
                          {trip.departure}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>→</div>
                        <div style={{ fontWeight: '500', fontSize: '14px', color: 'var(--text-secondary)' }}>
                          {trip.arrival}
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {isNext && <span className="badge badge-arriving">Next Trip</span>}
                        {isPast && <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Departed</span>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Quick info */}
            <div className="card">
              <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>
                Bus Information
              </h3>
              {[
                { label: 'Bus Number', value: bus.number },
                { label: 'Operator', value: bus.operator },
                { label: 'Bus Type', value: bus.busType },
                { label: 'Total Capacity', value: `${bus.totalSeats} seats` },
                { label: 'Available Seats', value: `${availableSeats} seats`, color: availableSeats > 10 ? 'var(--accent-green)' : availableSeats > 0 ? 'var(--accent-orange)' : 'var(--accent-red)' },
                { label: 'Fare', value: `₹${bus.fare} per seat`, color: 'var(--accent-green)' }
              ].map(({ label, value, color }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px', gap: '12px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>{label}</span>
                  <span style={{ fontWeight: '600', color: color || 'var(--text-primary)', textAlign: 'right' }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <div className="card">
              <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '14px', color: 'var(--text-primary)' }}>
                Amenities
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {bus.amenities.map(a => (
                  <div key={a} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '13px',
                    color: 'var(--text-secondary)'
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="3" strokeLinecap="round">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Booking CTA */}
            {isBookable && (
              <div style={{
                padding: '20px',
                background: 'linear-gradient(135deg, rgba(0, 201, 255, 0.06), rgba(79, 140, 255, 0.06))',
                border: '1px solid rgba(0, 201, 255, 0.15)',
                borderRadius: 'var(--radius-lg)'
              }}>
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '22px', fontWeight: '900', color: 'var(--accent-green)' }}>₹{bus.fare}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>per seat</div>
                </div>
                <button className="btn btn-primary btn-full" onClick={handleBook}>
                  Book Ticket →
                </button>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '8px' }}>
                  {availableSeats} seats available
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile sticky footer */}
      {isBookable && (
        <div style={{
          position: 'fixed',
          bottom: '64px',
          left: 0,
          right: 0,
          padding: '12px 16px',
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-subtle)',
          display: 'none'
        }}
          className="mobile-book-bar"
        >
          <button className="btn btn-primary btn-full" onClick={handleBook} style={{ fontSize: '16px', padding: '14px' }}>
            Book Ticket — ₹{bus.fare}
          </button>
        </div>
      )}
    </div>
  )
}
