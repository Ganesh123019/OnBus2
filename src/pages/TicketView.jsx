import { useParams, useNavigate, Link } from 'react-router-dom'
import { useBooking } from '../hooks/useBooking'
import { useToastCtx } from '../components/Layout'
import QRCode from '../components/QRCode'
import StatusBadge from '../components/StatusBadge'
import styles from './TicketView.module.css'

export default function TicketView() {
  const { ticketId } = useParams()
  const navigate = useNavigate()
  const { getBookingById } = useBooking()
  const toast = useToastCtx()

  const ticket = getBookingById(ticketId)

  if (!ticket) {
    return (
      <div className="container" style={{ padding: '60px 0' }}>
        <div className="empty-state">
          <div className="empty-state-icon">🎟️</div>
          <div className="empty-state-title">Pass Not Found</div>
          <p className="empty-state-desc">The transit pass requested could not be found or has expired.</p>
          <Link to="/tickets" className="btn btn-primary">Go to My Tickets</Link>
        </div>
      </div>
    )
  }

  const isConfirmed = ticket.status === 'CONFIRMED'
  const qrString = `ONBUS:${ticket.ticketId}:BUS_${ticket.busNumber}:SEATS_${ticket.seats.join(',')}:FARE_${ticket.totalFare}:SEC_${ticket.bookedAt.slice(0, 10)}`

  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: `ON BUS Pass - ${ticket.busNumber} (${ticket.ticketId})`,
        text: `My Mumbai BEST bus boarding pass for ${ticket.route?.from} to ${ticket.route?.to}. Ticket ID: ${ticket.ticketId}`,
        url: window.location.href
      }).catch(() => {})
    } else {
      navigator.clipboard?.writeText(window.location.href)
      if (toast?.info) toast.info('Pass link copied to clipboard')
    }
  }

  function handlePrint() {
    window.print()
  }

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontSize: '13px', color: 'var(--text-muted)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
          <span>›</span>
          <Link to="/tickets" style={{ color: 'var(--text-muted)' }}>My Tickets</Link>
          <span>›</span>
          <span style={{ color: 'var(--text-secondary)' }}>Pass {ticket.ticketId}</span>
        </div>

        <div className={styles.ticketWrapper}>
          <div className={styles.ticketCard}>
            {/* Top Pass Section */}
            <div className={styles.ticketTop}>
              <div className={styles.passHeader}>
                <div>
                  <div className={styles.agencyTitle}>Brihanmumbai Transit (BEST)</div>
                  <div className={styles.passType}>
                    <span>🚌 Digital M-Pass</span>
                  </div>
                </div>
                <div>
                  <StatusBadge status={ticket.status} />
                </div>
              </div>

              {/* Journey Route Timeline */}
              <div className={styles.journeyTimeline}>
                <div className={styles.timelineStop}>
                  <span className={styles.stopCity}>{ticket.route?.from?.split(' ')[0] || 'Origin'}</span>
                  <span className={styles.stopTime}>{ticket.departure} hrs</span>
                  <span className={styles.stopLabel}>Boarding</span>
                </div>

                <div className={styles.timelineConnector}>
                  <span className={styles.busIconMove}>🚏</span>
                  <div className={styles.timelineTrack} />
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Bus {ticket.busNumber}
                  </span>
                </div>

                <div className={styles.timelineStop} style={{ textAlign: 'right' }}>
                  <span className={styles.stopCity}>{ticket.route?.to?.split(' ')[0] || 'Destination'}</span>
                  <span className={styles.stopTime}>Scheduled</span>
                  <span className={styles.stopLabel}>Dropping</span>
                </div>
              </div>

              {/* Pass Metadata Grid */}
              <div className={styles.detailsGrid}>
                <div className={styles.detailCol}>
                  <span className={styles.detailKey}>Passenger</span>
                  <span className={styles.detailVal}>{ticket.userName || 'Passenger'}</span>
                </div>
                <div className={styles.detailCol}>
                  <span className={styles.detailKey}>Allocated Seats</span>
                  <span className={styles.detailVal} style={{ color: 'var(--accent-blue)' }}>
                    {ticket.seats?.join(', ')}
                  </span>
                </div>
                <div className={styles.detailCol}>
                  <span className={styles.detailKey}>Travel Date</span>
                  <span className={styles.detailVal}>{ticket.date}</span>
                </div>
                <div className={styles.detailCol}>
                  <span className={styles.detailKey}>{ticket.paymentMethod === 'CASH' ? 'Amount Due' : 'Total Paid'}</span>
                  <span className={styles.detailVal} style={{ color: ticket.paymentMethod === 'CASH' ? 'var(--accent-orange)' : 'var(--accent-green)' }}>
                    ₹{ticket.totalFare}
                  </span>
                </div>
                <div className={styles.detailCol}>
                  <span className={styles.detailKey}>Payment Mode</span>
                  <span className={styles.detailVal}>
                    {ticket.paymentMethod === 'CASH' ? '💵 Cash (On Boarding)' : `💳 ${ticket.paymentMethod || 'Online'}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Perforated Center Divider */}
            <div className={styles.perforatedLine}>
              <div className={styles.notchLeft} />
              <div className={styles.dashedDivider} />
              <div className={styles.notchRight} />
            </div>

            {/* Bottom Section: High Contrast QR for Conductor Scanner */}
            <div className={styles.ticketBottom}>
              <div className={styles.qrContainer}>
                <QRCode
                  value={qrString}
                  size={160}
                  fgColor="#070c18"
                  bgColor="#ffffff"
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '15px', fontWeight: '800', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>
                  {ticket.ticketId}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Secure QR Verification Token: {ticket.bookedAt?.slice(0, 10).replace(/-/g, '')}-OB
                </div>
              </div>

              <div className={styles.securityFooter}>
                Present this screen directly to the BEST bus conductor or tap against the onboard validator terminal when requested.
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.actions}>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handlePrint}
            >
              🖨️ Print / Save Pass
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleShare}
            >
              📤 Share Pass
            </button>

            <Link
              to={`/map?ticketId=${ticket.ticketId}&busId=${ticket.busId}`}
              className="btn btn-secondary btn-sm"
            >
              🗺️ Track Bus Live
            </Link>

            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => navigate('/tickets')}
            >
              Back to My Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
