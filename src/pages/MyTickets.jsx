import { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useBooking } from '../hooks/useBooking'
import { useToastCtx } from '../components/Layout'
import QRCode from '../components/QRCode'
import styles from './MyTickets.module.css'

export default function MyTickets() {
  const { user } = useAuth()
  const { getUserBookings, cancelBooking, error: bookingsError, loading: bookingsLoading } = useBooking()
  const toast = useToastCtx()
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState('ALL')
  const [cancellingTicketId, setCancellingTicketId] = useState(null)
  const [copiedId, setCopiedId] = useState(null)

  // Fetch tickets for active user
  const tickets = useMemo(() => {
    if (!user) return []
    return getUserBookings(user.id)
  }, [user, getUserBookings, cancellingTicketId])

  const filteredTickets = useMemo(() => {
    if (activeTab === 'CONFIRMED') {
      return tickets.filter(t => t.status === 'CONFIRMED')
    }
    if (activeTab === 'CANCELLED') {
      return tickets.filter(t => t.status === 'CANCELLED')
    }
    return tickets
  }, [tickets, activeTab])

  function handleCopy(id) {
    navigator.clipboard?.writeText(id)
    setCopiedId(id)
    if (toast?.info) toast.info(`Copied Ticket ID: ${id}`)
    setTimeout(() => setCopiedId(null), 2000)
  }

  async function handleCancelTicket(ticketId) {
    const res = await cancelBooking(ticketId, user.id)
    if (res.success) {
      if (toast?.success) toast.success('Ticket cancelled successfully')
      setCancellingTicketId(null)
    } else {
      if (toast?.error) toast.error(res.error || 'Failed to cancel ticket')
    }
  }

  return (
    <div className={styles.ticketsPage}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>My Bus Tickets</h1>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>
              View digital transit passes, boarding status & cancellation
            </p>
          </div>
          <Link to="/find" className="btn btn-primary">
            + Book New Trip
          </Link>
        </div>

        {/* Tabs */}
        <div className={styles.tabs} role="tablist">
          {[
            { id: 'ALL', label: `All Tickets (${tickets.length})` },
            { id: 'CONFIRMED', label: `Active Passes (${tickets.filter(t => t.status === 'CONFIRMED').length})` },
            { id: 'CANCELLED', label: `Cancelled (${tickets.filter(t => t.status === 'CANCELLED').length})` }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {bookingsError ? (
          <div className="card" role="alert" style={{ padding: '40px 20px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Tickets unavailable</h2>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{bookingsError}</p>
          </div>
        ) : bookingsLoading ? (
          <div className="card" style={{ padding: '60px 20px', textAlign: 'center' }} aria-busy="true">
            Loading your tickets…
          </div>
        ) : filteredTickets.length === 0 ? (
          <div className="card" style={{ padding: '60px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎫</div>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>
              No tickets found
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto 24px' }}>
              {activeTab === 'ALL'
                ? "You haven't booked any bus trips yet. Search and reserve your seats across Mumbai."
                : `No ${activeTab.toLowerCase()} tickets found.`}
            </p>
            <Link to="/find" className="btn btn-primary">
              Explore Mumbai Buses
            </Link>
          </div>
        ) : (
          <div className={styles.ticketList}>
            {filteredTickets.map(ticket => {
              const isConfirmed = ticket.status === 'CONFIRMED'

              return (
                <div key={ticket.ticketId} className={styles.ticketCard}>
                  {/* Card Header */}
                  <div className={styles.ticketHeader}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span className={styles.ticketIdBadge}>
                        <span>{ticket.ticketId}</span>
                        <button
                          type="button"
                          onClick={() => handleCopy(ticket.ticketId)}
                          style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}
                          title="Copy Ticket ID"
                        >
                          {copiedId === ticket.ticketId ? '✓' : '📋'}
                        </button>
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        Booked on {new Date(ticket.bookedAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {ticket.paymentMethod === 'CASH' && (
                        <span className="badge badge-arriving" style={{ fontSize: '11px' }}>💵 Cash on Bus</span>
                      )}
                      {isConfirmed ? (
                        <span className="badge badge-live">Confirmed</span>
                      ) : (
                        <span className="badge badge-cancelled">Cancelled</span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className={styles.ticketBody}>
                    <div className={styles.routeInfo}>
                      <div className={styles.busBadge}>
                        <span>Bus {ticket.busNumber}</span>
                        <span style={{ fontSize: '12px', fontWeight: '500', color: 'var(--text-muted)' }}>
                          • {ticket.busType}
                        </span>
                      </div>
                      <div className={styles.routeText}>
                        {ticket.route?.from || 'Origin'} → {ticket.route?.to || 'Destination'}
                      </div>
                    </div>

                    <div className={styles.timeInfo}>
                      <div className={styles.timeVal}>{ticket.departure} hrs</div>
                      <div className={styles.dateVal}>{ticket.date}</div>
                    </div>

                    <div className={styles.seatInfo}>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>
                        Seats ({ticket.seats?.length || 1})
                      </div>
                      <div className={styles.seatPills}>
                        {ticket.seats?.map(s => (
                          <span key={s} className={styles.seatPill}>{s}</span>
                        ))}
                      </div>
                    </div>

                    {/* QR Thumbnail */}
                    <div style={{ display: 'none', md: 'block' }}>
                      <QRCode value={`ONBUS:${ticket.ticketId}`} size={64} fgColor={isConfirmed ? '#00c9ff' : '#5a728a'} />
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className={styles.ticketActions}>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => navigate(`/ticket/${ticket.ticketId}`)}
                    >
                      📱 Open Digital Pass & QR
                    </button>

                    <Link
                      to={`/map?ticketId=${ticket.ticketId}&busId=${ticket.busId}`}
                      className="btn btn-secondary btn-sm"
                    >
                      🗺️ Track Bus Live
                    </Link>

                    {isConfirmed && (
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        style={{ marginLeft: 'auto' }}
                        onClick={() => setCancellingTicketId(ticket.ticketId)}
                      >
                        Cancel Ticket
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Cancellation Confirmation Modal */}
        {cancellingTicketId && (
          <div className="modal-overlay" onClick={() => setCancellingTicketId(null)}>
            <div className={`modal ${styles.modalConfirm}`} onClick={e => e.stopPropagation()}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>⚠️</div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>Cancel Booking?</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Are you sure you want to cancel ticket <strong>{cancellingTicketId}</strong>? This seat will be released back to other commuters.
              </p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setCancellingTicketId(null)}
                >
                  Keep Ticket
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleCancelTicket(cancellingTicketId)}
                >
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
