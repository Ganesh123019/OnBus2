import { useState, useMemo } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { BUSES, generateSeatLayout, getBookedSeats } from '../data/buses'
import { useAuth } from '../hooks/useAuth'
import { useBooking } from '../hooks/useBooking'
import { useToastCtx } from '../components/Layout'
import StatusBadge from '../components/StatusBadge'
import styles from './Booking.module.css'

export default function Booking() {
  const { busId } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { createBooking } = useBooking()
  const toast = useToastCtx()

  const bus = BUSES.find(b => b.id === busId)

  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0])
  const [selectedDeparture, setSelectedDeparture] = useState(() => bus?.schedule[0]?.departure || '08:00')
  const [selectedSeats, setSelectedSeats] = useState([])
  const [boardingStop, setBoardingStop] = useState(() => bus?.route.from || '')
  const [droppingStop, setDroppingStop] = useState(() => bus?.route.to || '')
  const [paymentMethod, setPaymentMethod] = useState('UPI')
  const [loading, setLoading] = useState(false)
  const [passengerName, setPassengerName] = useState(user?.name || '')
  const [passengerPhone, setPassengerPhone] = useState(user?.phone || '')

  // Generate seat map taking existing bookings into account
  const bookedSeats = useMemo(() => {
    if (!bus) return []
    return getBookedSeats(bus.id)
  }, [bus])

  const seatLayout = useMemo(() => {
    if (!bus) return []
    return generateSeatLayout(bus)
  }, [bus])

  if (!bus) {
    return (
      <div className="container" style={{ padding: '60px 0' }}>
        <div className="empty-state">
          <div className="empty-state-icon">🚌</div>
          <div className="empty-state-title">Bus not found</div>
          <p className="empty-state-desc">The bus you are trying to book does not exist.</p>
          <Link to="/find" className="btn btn-primary">Find a Bus</Link>
        </div>
      </div>
    )
  }

  function toggleSeat(seatId) {
    if (bookedSeats.includes(seatId)) return

    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(s => s !== seatId)
      }
      if (prev.length >= 6) {
        if (toast?.error) toast.error('Maximum 6 seats allowed per booking')
        return prev
      }
      return [...prev, seatId]
    })
  }

  async function handleBooking(e) {
    e.preventDefault()

    if (selectedSeats.length === 0) {
      if (toast?.error) toast.error('Please select at least 1 seat')
      return
    }

    if (!passengerName.trim()) {
      if (toast?.error) toast.error('Please provide passenger name')
      return
    }

    setLoading(true)
    const res = await createBooking({
      userId: user.id,
      userName: passengerName.trim(),
      userEmail: user?.email || '',
      userPhone: passengerPhone.trim(),
      busId: bus.id,
      bus,
      seats: selectedSeats,
      departure: selectedDeparture,
      date,
      fare: bus.fare,
      boardingStop,
      droppingStop,
      paymentMethod
    })
    setLoading(false)

    if (res.success) {
      if (toast?.success) toast.success(`Ticket confirmed! Seat(s): ${selectedSeats.join(', ')}`)
      navigate(`/ticket/${res.booking.ticketId}`, { replace: true })
    } else {
      if (toast?.error) toast.error(res.error || 'Failed to complete booking')
    }
  }

  const totalFare = bus.fare * selectedSeats.length

  return (
    <div className={styles.bookingPage}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontSize: '13px', color: 'var(--text-muted)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link>
          <span>›</span>
          <Link to="/find" style={{ color: 'var(--text-muted)' }}>Find a Bus</Link>
          <span>›</span>
          <Link to={`/bus/${bus.id}`} style={{ color: 'var(--text-muted)' }}>Bus {bus.number}</Link>
          <span>›</span>
          <span style={{ color: 'var(--text-secondary)' }}>Seat Selection</span>
        </div>

        {/* Bus Info Header */}
        <div className={styles.headerCard}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '12px',
                background: `linear-gradient(135deg, ${bus.color}22, ${bus.color}44)`,
                border: `1px solid ${bus.color}33`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: '900',
                color: bus.color
              }}>
                {bus.number}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h1 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)' }}>
                    Bus {bus.number}
                  </h1>
                  <StatusBadge status={bus.status} />
                  <span className="badge badge-arriving">{bus.busType}</span>
                </div>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {bus.route.from} → {bus.route.to}
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Fare per Passenger</div>
              <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--accent-blue)' }}>₹{bus.fare}</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleBooking} className={styles.grid}>
          {/* Left Column: Seat Matrix & Trip Details */}
          <div>
            {/* Travel Date & Schedule */}
            <div className={styles.seatSection} style={{ marginBottom: '24px' }}>
              <h2 className={styles.sectionTitle}>1. Travel Date & Departure</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div className="input-group">
                  <label className="input-label" htmlFor="travel-date">Travel Date</label>
                  <input
                    id="travel-date"
                    type="date"
                    className="input"
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={e => setDate(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label className="input-label" htmlFor="travel-departure">Select Departure Time</label>
                  <select
                    id="travel-departure"
                    className="input"
                    value={selectedDeparture}
                    onChange={e => setSelectedDeparture(e.target.value)}
                  >
                    {bus.schedule.map(s => (
                      <option key={s.departure} value={s.departure}>
                        {s.departure} (Arrives approx. {s.arrival})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Boarding and Dropping Stops */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div className="input-group">
                  <label className="input-label" htmlFor="boarding-stop">Boarding Stop</label>
                  <select
                    id="boarding-stop"
                    className="input"
                    value={boardingStop}
                    onChange={e => setBoardingStop(e.target.value)}
                  >
                    {bus.route.stops.map(stop => (
                      <option key={`b-${stop}`} value={stop}>{stop}</option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <label className="input-label" htmlFor="dropping-stop">Dropping Stop</label>
                  <select
                    id="dropping-stop"
                    className="input"
                    value={droppingStop}
                    onChange={e => setDroppingStop(e.target.value)}
                  >
                    {bus.route.stops.map(stop => (
                      <option key={`d-${stop}`} value={stop}>{stop}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Interactive Seat Layout */}
            <div className={styles.seatSection}>
              <div className={styles.sectionTitle}>
                <span>2. Select Seats</span>
                <span style={{ fontSize: '13px', color: 'var(--accent-blue)', fontWeight: '600' }}>
                  {selectedSeats.length} / 6 Selected
                </span>
              </div>

              <div className={styles.busCabin}>
                {/* Driver / Cabin Head */}
                <div className={styles.driverRow}>
                  <div className={styles.cabinDoor}>ENTRY</div>
                  <div className={styles.driverWheel} title="Driver Seat">🛞</div>
                </div>

                {/* Seat Rows */}
                <div className={styles.seatGrid}>
                  {seatLayout.map((row, rIndex) => (
                    <div key={rIndex} className={styles.seatRow}>
                      {row.map((seat, cIndex) => {
                        if (seat.type === 'aisle') {
                          return <div key={`aisle-${cIndex}`} className={styles.aisle}>·</div>
                        }

                        const isOccupied = seat.status === 'occupied'
                        const isSelected = selectedSeats.includes(seat.id)

                        return (
                          <button
                            key={seat.id}
                            type="button"
                            className={`
                              ${styles.seatBtn}
                              ${isSelected ? styles.seatSelected : ''}
                              ${isOccupied ? styles.seatOccupied : ''}
                            `}
                            disabled={isOccupied}
                            onClick={() => toggleSeat(seat.id)}
                            aria-label={`Seat ${seat.id} ${isOccupied ? 'Occupied' : isSelected ? 'Selected' : 'Available'}`}
                          >
                            <span>{seat.id}</span>
                          </button>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Seat Legend */}
              <div className={styles.legend}>
                <div className={styles.legendItem}>
                  <span className={styles.legendDot} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-medium)' }} />
                  <span>Available</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={styles.legendDot} style={{ background: '#00f5c4', boxShadow: '0 0 6px #00f5c4' }} />
                  <span>Selected</span>
                </div>
                <div className={styles.legendItem}>
                  <span className={styles.legendDot} style={{ background: 'rgba(255,255,255,0.06)' }} />
                  <span>Occupied</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Passenger Details, Price & Payment */}
          <div>
            <div className={styles.summaryCard}>
              <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>
                3. Passenger & Payment
              </h2>

              {/* Passenger Inputs */}
              <div className="input-group">
                <label className="input-label" htmlFor="passenger-name">Primary Passenger</label>
                <input
                  id="passenger-name"
                  type="text"
                  className="input"
                  placeholder="Full name"
                  value={passengerName}
                  onChange={e => setPassengerName(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label className="input-label" htmlFor="passenger-phone">Mobile Number</label>
                <input
                  id="passenger-phone"
                  type="tel"
                  className="input"
                  placeholder="10-digit mobile number"
                  value={passengerPhone}
                  onChange={e => setPassengerPhone(e.target.value)}
                  required
                />
              </div>

              {/* Selected Seats Pills */}
              <div>
                <div className="input-label" style={{ marginBottom: '8px' }}>Selected Seat(s)</div>
                {selectedSeats.length === 0 ? (
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    Click on the available seats on the map to select
                  </div>
                ) : (
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedSeats.map(s => (
                      <span
                        key={s}
                        style={{
                          background: 'rgba(0, 201, 255, 0.15)',
                          color: 'var(--accent-blue)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: '700',
                          border: '1px solid var(--border-accent)'
                        }}
                      >
                        Seat {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Payment Methods */}
              <div>
                <div className="input-label" style={{ marginBottom: '8px' }}>Payment Mode</div>
                <div className={styles.paymentOptions}>
                  {[
                    { id: 'UPI', label: '⚡ UPI / GPay' },
                    { id: 'CASH', label: '💵 Cash on Bus' },
                    { id: 'CARD', label: '💳 Debit / Card' },
                    { id: 'NETBANKING', label: '🏦 Net Banking' },
                    { id: 'CHALO', label: '🎫 Chalo / BEST' }
                  ].map(method => (
                    <div
                      key={method.id}
                      className={`${styles.payOption} ${paymentMethod === method.id ? styles.payOptionActive : ''}`}
                      onClick={() => setPaymentMethod(method.id)}
                    >
                      {method.label}
                    </div>
                  ))}
                </div>

                {paymentMethod === 'CASH' && (
                  <div style={{
                    marginTop: '10px',
                    padding: '10px 14px',
                    background: 'rgba(34, 211, 160, 0.08)',
                    border: '1px solid rgba(34, 211, 160, 0.25)',
                    borderRadius: '8px',
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5
                  }}>
                    <strong style={{ color: 'var(--accent-green)' }}>💵 Pay in Cash to Bus Conductor:</strong>
                    <br />
                    Your seat will be reserved immediately. Please keep exact change of <strong>₹{totalFare}</strong> ready to pay when boarding the bus.
                  </div>
                )}
              </div>

              {/* Price Calculation */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                <div className={styles.priceRow}>
                  <span>Base Fare ({selectedSeats.length || 0} × ₹{bus.fare})</span>
                  <span>₹{totalFare}</span>
                </div>
                <div className={styles.priceRow}>
                  <span>Municipal Transit Tax (GST)</span>
                  <span style={{ color: 'var(--accent-green)' }}>₹0 (Included)</span>
                </div>
                <div className={styles.priceTotal}>
                  <span>Total Amount</span>
                  <span style={{ color: 'var(--accent-blue)' }}>₹{totalFare}</span>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-full btn-lg"
                disabled={loading || selectedSeats.length === 0}
              >
                {loading ? (
                  <span className="spinner" style={{ width: 18, height: 18 }} />
                ) : paymentMethod === 'CASH' ? (
                  `Reserve Seats & Pay ₹${totalFare} in Cash`
                ) : (
                  `Pay ₹${totalFare} & Confirm Ticket`
                )}
              </button>

              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.4 }}>
                Instant digital pass generated upon confirmation. M-ticket valid on all BEST municipal scanners.
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
