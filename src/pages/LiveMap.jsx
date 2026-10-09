import { useEffect, useRef, useState, useCallback } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import { BUSES, MUMBAI_STOPS } from '../data/buses'
import { useBooking } from '../hooks/useBooking'
import { useAuth } from '../hooks/useAuth'
import StatusBadge from '../components/StatusBadge'
import styles from './LiveMap.module.css'

const GOOGLE_API_KEY = 'AIzaSyASZhmma5ryhh4yz889E6jrObSLR7yy2FM'

const GOOGLE_MAP_DARK_STYLE = [
  { elementType: 'geometry', stylers: [{ color: '#1d2c4d' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#8ec3b9' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#1a3646' }] },
  { featureType: 'administrative.country', elementType: 'geometry.stroke', stylers: [{ color: '#4b6878' }] },
  { featureType: 'administrative.land_parcel', elementType: 'labels.text.fill', stylers: [{ color: '#64779e' }] },
  { featureType: 'administrative.province', elementType: 'geometry.stroke', stylers: [{ color: '#4b6878' }] },
  { featureType: 'landscape.man_made', elementType: 'geometry.stroke', stylers: [{ color: '#334e87' }] },
  { featureType: 'landscape.natural', elementType: 'geometry', stylers: [{ color: '#023e58' }] },
  { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#283d6a' }] },
  { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#6f9ba5' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#304a7d' }] },
  { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#98a5be' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#1d2c4d' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#2c6675' }] },
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#255e63' }] },
  { featureType: 'transit', elementType: 'labels.text.fill', stylers: [{ color: '#98a5be' }] },
  { featureType: 'transit.line', elementType: 'geometry.fill', stylers: [{ color: '#283d6a' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0e1626' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#4e6d70' }] }
]

export default function LiveMap() {
  const mapContainerRef = useRef(null)
  const gmapInstanceRef = useRef(null)
  const busMarkerRef = useRef(null)
  const routePolylineRef = useRef(null)
  const stopMarkersRef = useRef([])

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { getBookingById, getUserBookings } = useBooking()

  const ticketIdParam = searchParams.get('ticketId')
  const busIdParam = searchParams.get('busId')

  const [ticket, setTicket] = useState(null)
  const [bus, setBus] = useState(null)
  const [loading, setLoading] = useState(true)
  const [followBus, setFollowBus] = useState(true)
  const [mapType, setMapType] = useState('roadmap') // roadmap, satellite, terrain
  const [busPos, setBusPos] = useState(null)
  const [pathIndex, setPathIndex] = useState(0)
  const [telemetry, setTelemetry] = useState({ speed: 36, nextStop: '', eta: '4 min' })

  // Find user bookings for fallback/selection
  const userBookings = user ? getUserBookings(user.id).filter(b => b.status === 'CONFIRMED') : []

  // Load ticket and bus details from database API or local cache
  useEffect(() => {
    let isMounted = true

    async function loadData() {
      setLoading(true)
      let foundTicket = null
      let targetBusId = busIdParam

      // 1. Try to load ticket by ticketId
      if (ticketIdParam) {
        try {
          const res = await fetch(`/api/bookings?ticketId=${encodeURIComponent(ticketIdParam)}`)
          if (res.ok) {
            const data = await res.json()
            if (data.booking) foundTicket = data.booking
          }
        } catch (error) {
          console.error('Ticket lookup failed:', error)
        }
        if (!foundTicket) {
          foundTicket = getBookingById(ticketIdParam)
        }
        if (foundTicket) {
          targetBusId = foundTicket.busId
        }
      }

      // 2. If no ticketId was in URL but busId was, check if user has a booking for this bus
      if (!foundTicket && targetBusId && user) {
        const bookings = getUserBookings(user.id)
        foundTicket = bookings.find(b => b.busId === targetBusId && b.status === 'CONFIRMED') || null
      }

      // 3. Find the matching bus from fleet
      let foundBus = null
      if (targetBusId) {
        foundBus = BUSES.find(b => b.id === targetBusId) || null
      }

      if (isMounted) {
        setTicket(foundTicket)
        setBus(foundBus)
        if (foundBus) {
          const initLoc = foundBus.currentLocation || foundBus.routePath?.[0] || { lat: 19.0760, lng: 72.8777 }
          setBusPos(initLoc)
          setTelemetry({
            speed: 32 + (Math.floor(Math.random() * 12)),
            nextStop: foundTicket?.droppingStop || foundBus.route?.stops?.[1] || foundBus.route?.to,
            eta: '4 min'
          })
        }
        setLoading(false)
      }
    }

    loadData()
    return () => { isMounted = false }
  }, [ticketIdParam, busIdParam, user, getBookingById, getUserBookings])

  // Initialize Native Google Map
  useEffect(() => {
    if (!bus || !mapContainerRef.current) return

    // Ensure Google Maps API is loaded
    function initGoogleMap() {
      if (!window.google || !window.google.maps) {
        setTimeout(initGoogleMap, 300)
        return
      }

      const routePoints = (bus.routePath && bus.routePath.length > 0)
        ? bus.routePath.map(p => ({ lat: p.lat, lng: p.lng }))
        : [{ lat: 19.0760, lng: 72.8777 }]

      const centerLoc = busPos || routePoints[0]

      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: centerLoc,
        zoom: 13,
        mapTypeId: mapType,
        styles: mapType === 'roadmap' ? GOOGLE_MAP_DARK_STYLE : null,
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: false,
        fullscreenControl: true,
        mapTypeControl: false
      })

      gmapInstanceRef.current = map

      // Render Polyline for the booked route
      const polyline = new window.google.maps.Polyline({
        path: routePoints,
        geodesic: true,
        strokeColor: '#00f5c4',
        strokeOpacity: 0.9,
        strokeWeight: 5
      })
      polyline.setMap(map)
      routePolylineRef.current = polyline

      // Fit map bounds to show full route
      const bounds = new window.google.maps.LatLngBounds()
      routePoints.forEach(p => bounds.extend(p))
      map.fitBounds(bounds)

      // Add Markers for Stops
      const stops = bus.route?.stops || []
      stopMarkersRef.current.forEach(m => m.setMap(null))
      stopMarkersRef.current = []

      stops.forEach((stopName, idx) => {
        const coords = MUMBAI_STOPS[stopName] || routePoints[idx] || routePoints[0]
        const isBoarding = ticket?.boardingStop ? ticket.boardingStop === stopName : idx === 0
        const isDropping = ticket?.droppingStop ? ticket.droppingStop === stopName : idx === stops.length - 1

        let iconColor = '#00c9ff'
        let iconScale = 6
        if (isBoarding) {
          iconColor = '#00f5c4'
          iconScale = 9
        } else if (isDropping) {
          iconColor = '#ff5571'
          iconScale = 9
        }

        const marker = new window.google.maps.Marker({
          position: coords,
          map,
          title: stopName,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: iconColor,
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: '#ffffff',
            scale: iconScale
          }
        })

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="color: #070c18; padding: 4px; font-family: Inter, sans-serif;">
              <strong>${isBoarding ? '🟢 Boarding: ' : isDropping ? '🏁 Dropping: ' : '🚏 Stop: '}</strong>${stopName}
              ${ticket ? `<div style="font-size: 11px; color: #555; margin-top: 2px;">Ticket: ${ticket.ticketId}</div>` : ''}
            </div>
          `
        })

        marker.addListener('click', () => {
          infoWindow.open(map, marker)
        })

        stopMarkersRef.current.push(marker)
      })

      // Add Animated Live Bus Marker
      const busMarker = new window.google.maps.Marker({
        position: centerLoc,
        map,
        title: `Bus ${bus.number} (Live)`,
        zIndex: 9999,
        label: {
          text: `🚌 ${bus.number}`,
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '11px',
          className: 'gmap-bus-label'
        },
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 14,
          fillColor: bus.color || '#00c9ff',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 3
        }
      })

      busMarkerRef.current = busMarker
    }

    initGoogleMap()

    return () => {
      if (routePolylineRef.current) routePolylineRef.current.setMap(null)
      if (busMarkerRef.current) busMarkerRef.current.setMap(null)
      stopMarkersRef.current.forEach(m => m.setMap(null))
      gmapInstanceRef.current = null
    }
  }, [bus, mapType])

  // Live GPS movement simulation along booked route
  useEffect(() => {
    if (!bus || !bus.routePath || bus.routePath.length < 2) return

    const timer = setInterval(() => {
      setBusPos(prev => {
        if (!prev) return bus.routePath[0]
        const path = bus.routePath
        const nextIdx = (pathIndex + 1) % path.length
        const target = path[nextIdx]

        const newLat = +(prev.lat + (target.lat - prev.lat) * 0.15).toFixed(4)
        const newLng = +(prev.lng + (target.lng - prev.lng) * 0.15).toFixed(4)

        const dist = Math.hypot(target.lat - newLat, target.lng - newLng)
        if (dist < 0.002) {
          setPathIndex(nextIdx)
          setTelemetry(t => ({
            ...t,
            nextStop: bus.route?.stops?.[(nextIdx + 1) % bus.route.stops.length] || bus.route?.to,
            speed: 28 + Math.floor(Math.random() * 15)
          }))
        }

        const nextPos = { lat: newLat, lng: newLng }

        // Update Google Maps marker & smooth pan if follow mode is active
        if (busMarkerRef.current) {
          busMarkerRef.current.setPosition(nextPos)
        }
        if (followBus && gmapInstanceRef.current) {
          gmapInstanceRef.current.panTo(nextPos)
        }

        return nextPos
      })
    }, 2500)

    return () => clearInterval(timer)
  }, [bus, pathIndex, followBus])

  function handleCenterBus() {
    if (gmapInstanceRef.current && busPos) {
      gmapInstanceRef.current.panTo(busPos)
      gmapInstanceRef.current.setZoom(15)
    }
  }

  // If no ticket/bus or tracking without booking:
  if (!loading && (!bus || !ticket)) {
    return (
      <div className="container" style={{ padding: '60px 16px', maxWidth: '680px', margin: '0 auto' }}>
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-xl)',
          padding: '36px 24px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🗺️</div>
          <h1 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '10px' }}>
            Live Map is Only Available for Booked Tickets
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
            To protect transit bandwidth and provide dedicated telemetry, live Google Map tracking is strictly generated for your confirmed booked bus journey.
          </p>

          {userBookings.length > 0 ? (
            <div style={{ textAlign: 'left', marginTop: '20px' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px', textTransform: 'uppercase' }}>
                Select One of Your Booked Buses to Track:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {userBookings.map(b => (
                  <Link
                    key={b.ticketId}
                    to={`/map?ticketId=${b.ticketId}&busId=${b.busId}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 16px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      textDecoration: 'none',
                      color: 'var(--text-primary)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '15px' }}>
                        Bus {b.busNumber} • {b.route?.from} → {b.route?.to}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        Ticket: {b.ticketId} • Seats: {b.seats?.join(', ')} • {b.paymentMethod === 'CASH' ? '💵 Cash on Bus' : 'Paid Online'}
                      </div>
                    </div>
                    <span className="btn btn-primary btn-sm">
                      Track Live →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/find" className="btn btn-primary btn-lg">
                🔍 Find & Book a Bus
              </Link>
              <Link to="/tickets" className="btn btn-secondary btn-lg">
                🎫 View My Tickets
              </Link>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.mapContainer} style={{ height: 'calc(100vh - var(--nav-height))', position: 'relative' }}>
      {/* Map DOM Element */}
      <div ref={mapContainerRef} className={styles.mapElement} style={{ width: '100%', height: '100%' }} />

      {/* Top Floating Header: Booked Journey Details */}
      <div className={styles.topOverlay} style={{ maxWidth: '520px' }}>
        <div className={styles.searchCard}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                background: bus?.color || '#00c9ff',
                color: '#070c18',
                fontWeight: '900',
                padding: '4px 10px',
                borderRadius: '8px',
                fontSize: '16px'
              }}>
                {bus?.number}
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '15px', color: 'var(--text-primary)' }}>
                  Tracking Your Booked Bus {bus?.number}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {ticket?.boardingStop || bus?.route?.from} → {ticket?.droppingStop || bus?.route?.to}
                </div>
              </div>
            </div>

            {/* Map Theme Toggle */}
            <select
              value={mapType}
              onChange={e => setMapType(e.target.value)}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                borderRadius: 'var(--radius-full)',
                padding: '4px 10px',
                fontSize: '11px',
                cursor: 'pointer',
                outline: 'none',
                fontWeight: '600'
              }}
              title="Google Map Mode"
            >
              <option value="roadmap">🗺️ Google Road</option>
              <option value="satellite">🛰️ Google Satellite</option>
              <option value="terrain">⛰️ Google Terrain</option>
            </select>
          </div>

          {/* Ticket & Database Metadata Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            paddingTop: '6px',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '11px'
          }}>
            <span style={{ color: 'var(--text-muted)' }}>Ticket ID: <strong style={{ color: 'var(--text-primary)' }}>{ticket?.ticketId}</strong></span>
            <span>•</span>
            <span style={{ color: 'var(--text-muted)' }}>Txn: <strong style={{ color: 'var(--text-primary)' }}>{ticket?.transactionId || 'TXN_OB_LIVE'}</strong></span>
            <span>•</span>
            <span style={{ color: ticket?.paymentMethod === 'CASH' ? 'var(--accent-orange)' : 'var(--accent-green)', fontWeight: '700' }}>
              {ticket?.paymentMethod === 'CASH' ? '💵 Cash on Bus' : '💳 Paid Online'}
            </span>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className={styles.mapControls}>
        <button
          className={styles.mapControlBtn}
          onClick={handleCenterBus}
          title="Center on My Bus"
          aria-label="Center on My Bus"
        >
          🎯
        </button>
        <Link
          to={`/ticket/${ticket?.ticketId}`}
          className={styles.mapControlBtn}
          title="View Ticket QR Pass"
          aria-label="View Ticket QR Pass"
          style={{ textDecoration: 'none' }}
        >
          🎫
        </Link>
      </div>

      {/* Bottom Floating Telemetry & Passenger Drawer */}
      <div className={styles.drawer} style={{ maxWidth: '440px' }}>
        <div className={styles.drawerHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#00f5c4',
              boxShadow: '0 0 8px #00f5c4'
            }} />
            <span style={{ fontWeight: '800', fontSize: '13px', color: '#00f5c4', letterSpacing: '0.04em' }}>
              GOOGLE MAPS LIVE TELEMETRY
            </span>
          </div>

          <button
            type="button"
            onClick={() => setFollowBus(!followBus)}
            style={{
              background: followBus ? 'rgba(0, 245, 196, 0.2)' : 'var(--bg-surface)',
              color: followBus ? '#00f5c4' : 'var(--text-secondary)',
              border: `1px solid ${followBus ? '#00f5c4' : 'var(--border-subtle)'}`,
              borderRadius: '6px',
              padding: '4px 10px',
              fontSize: '11px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            {followBus ? '🎯 Auto-Follow: ON' : '🎯 Auto-Follow: OFF'}
          </button>
        </div>

        {/* Real-time stats */}
        <div className={styles.drawerStats}>
          <div className={styles.drawerStatItem}>
            <span className={styles.drawerStatLabel}>Current Speed</span>
            <span className={styles.drawerStatVal} style={{ color: 'var(--accent-blue)' }}>
              {telemetry.speed} km/h
            </span>
          </div>
          <div className={styles.drawerStatItem}>
            <span className={styles.drawerStatLabel}>Next Stop ETA</span>
            <span className={styles.drawerStatVal} style={{ color: 'var(--accent-green)' }}>
              {telemetry.eta}
            </span>
          </div>
        </div>

        {/* Database Passenger Info Breakdown */}
        <div style={{
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-md)',
          padding: '12px',
          marginBottom: '14px',
          fontSize: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Passenger:</span>
            <strong style={{ color: 'var(--text-primary)' }}>{ticket?.userName || user?.name} ({ticket?.userPhone || user?.phone})</strong>
          </div>
          {ticket?.userEmail && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Email:</span>
              <span style={{ color: 'var(--text-secondary)' }}>{ticket.userEmail}</span>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Your Reserved Seats:</span>
            <strong style={{ color: 'var(--accent-blue)' }}>{ticket?.seats?.join(', ')}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Payment Mode:</span>
            <strong style={{ color: ticket?.paymentMethod === 'CASH' ? 'var(--accent-orange)' : 'var(--accent-green)' }}>
              {ticket?.paymentMethod === 'CASH' ? `💵 Cash on Boarding (₹${ticket.totalFare} Due)` : `💳 Online Paid (₹${ticket?.totalFare})`}
            </strong>
          </div>
        </div>

        <div className={styles.drawerActions}>
          <Link
            to={`/ticket/${ticket?.ticketId}`}
            className="btn btn-primary btn-sm"
            style={{ flex: 1, textAlign: 'center' }}
          >
            🎫 View M-Pass & QR
          </Link>
          <Link
            to="/tickets"
            className="btn btn-secondary btn-sm"
            style={{ flex: 1, textAlign: 'center' }}
          >
            ← My Tickets
          </Link>
        </div>
      </div>
    </div>
  )
}

