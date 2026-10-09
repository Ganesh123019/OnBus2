import { Link } from 'react-router-dom'
import { useAvailableSeats } from '../hooks/useAvailableSeats'
import StatusBadge from './StatusBadge'

export default function BusCard({ bus, showBook = true, compact = false }) {
  const availableSeats = useAvailableSeats(bus)
  const nextTrip = bus.schedule.find(s => {
    const [h, m] = s.departure.split(':').map(Number)
    const now = new Date()
    return h > now.getHours() || (h === now.getHours() && m >= now.getMinutes())
  }) || bus.schedule[0]

  const isFull = availableSeats <= 0
  const isLow = availableSeats <= 5 && availableSeats > 0

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: compact ? '14px' : '20px',
        transition: 'all 0.2s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--border-medium)'
        e.currentTarget.style.boxShadow = 'var(--shadow-md)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Bus number badge */}
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '10px',
            background: `linear-gradient(135deg, ${bus.color}22, ${bus.color}44)`,
            border: `1px solid ${bus.color}33`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <span style={{ fontWeight: '800', fontSize: '15px', color: bus.color }}>
              {bus.number}
            </span>
          </div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '15px', color: 'var(--text-primary)', marginBottom: '2px' }}>
              Bus {bus.number}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {bus.operator} • {bus.busType}
            </div>
          </div>
        </div>
        <StatusBadge status={bus.status} />
      </div>

      {/* Route */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '14px',
        padding: '10px 14px',
        background: 'var(--bg-surface)',
        borderRadius: '8px'
      }}>
        <div style={{ textAlign: 'center', minWidth: '0', flex: 1 }}>
          <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {bus.route.from.replace(' Station', '').replace(' Bus Stop', '')}
          </div>
          {nextTrip && (
            <div style={{ fontSize: '11px', color: 'var(--accent-blue)', fontWeight: '600' }}>
              {nextTrip.departure}
            </div>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 'none' }}>
          <div style={{ width: '20px', height: '1px', background: 'var(--border-medium)' }} />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          <div style={{ width: '20px', height: '1px', background: 'var(--border-medium)' }} />
        </div>
        <div style={{ textAlign: 'center', minWidth: '0', flex: 1 }}>
          <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {bus.route.to.replace(' Station', '').replace(' Bus Stop', '')}
          </div>
          {nextTrip && (
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600' }}>
              {nextTrip.arrival}
            </div>
          )}
        </div>
      </div>

      {/* Info row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: showBook ? '14px' : '0' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>Stops</div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
              {bus.route.stops.length}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>Fare</div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--accent-green)' }}>
              ₹{bus.fare}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>Seats</div>
            <div style={{
              fontSize: '13px',
              fontWeight: '600',
              color: isFull ? 'var(--accent-red)' : isLow ? 'var(--accent-orange)' : 'var(--accent-green)'
            }}>
              {isFull ? 'Full' : `${availableSeats} left`}
            </div>
          </div>
        </div>

        {bus.amenities.includes('Air Conditioned') && (
          <span style={{
            fontSize: '10px',
            fontWeight: '600',
            padding: '3px 8px',
            borderRadius: '999px',
            background: 'rgba(79, 140, 255, 0.1)',
            color: 'var(--accent-indigo)',
            border: '1px solid rgba(79, 140, 255, 0.2)'
          }}>AC</span>
        )}
        {bus.amenities.includes('Electric') && (
          <span style={{
            fontSize: '10px',
            fontWeight: '600',
            padding: '3px 8px',
            borderRadius: '999px',
            background: 'rgba(34, 211, 160, 0.1)',
            color: 'var(--accent-green)',
            border: '1px solid rgba(34, 211, 160, 0.2)'
          }}>⚡ EV</span>
        )}
      </div>

      {/* Actions */}
      {showBook && (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Link
            to={`/bus/${bus.id}`}
            className="btn btn-secondary btn-sm"
            style={{ flex: 1, textAlign: 'center' }}
          >
            View Details
          </Link>
          {!isFull && bus.status !== 'CANCELLED' && bus.status !== 'DEPARTED' && (
            <Link
              to={`/book/${bus.id}`}
              className="btn btn-primary btn-sm"
              style={{ flex: 1, textAlign: 'center' }}
            >
              Book Now
            </Link>
          )}
          {isFull && (
            <span className="btn btn-sm" style={{
              flex: 1,
              textAlign: 'center',
              background: 'rgba(255, 85, 113, 0.08)',
              color: 'var(--accent-red)',
              border: '1px solid rgba(255, 85, 113, 0.15)',
              cursor: 'not-allowed'
            }}>
              Full
            </span>
          )}
        </div>
      )}
    </div>
  )
}
