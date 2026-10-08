import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BUSES, searchBuses, MUMBAI_STOPS } from '../data/buses'
import BusCard from '../components/BusCard'
import styles from './FindBus.module.css'

const ALL_STOPS = Object.keys(MUMBAI_STOPS).sort()
const BUS_TYPES = ['All', 'AC', 'Non-AC', 'Electric']
const SORT_OPTIONS = [
  { value: 'departure', label: 'Departure Time' },
  { value: 'fare', label: 'Fare (Low to High)' },
  { value: 'seats', label: 'Most Seats' }
]

function SkeletonCard() {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <div className="skeleton" style={{ width: 48, height: 48, borderRadius: 10 }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div className="skeleton" style={{ width: '60%', height: 16, borderRadius: 4 }} />
          <div className="skeleton" style={{ width: '40%', height: 12, borderRadius: 4 }} />
        </div>
      </div>
      <div className="skeleton" style={{ height: 60, borderRadius: 8 }} />
      <div style={{ display: 'flex', gap: '8px' }}>
        <div className="skeleton" style={{ flex: 1, height: 36, borderRadius: 8 }} />
        <div className="skeleton" style={{ flex: 1, height: 36, borderRadius: 8 }} />
      </div>
    </div>
  )
}

export default function FindBus() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [from, setFrom] = useState(searchParams.get('from') || '')
  const [to, setTo] = useState(searchParams.get('to') || '')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [busType, setBusType] = useState('All')
  const [sortBy, setSortBy] = useState('departure')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [fromSuggestions, setFromSuggestions] = useState([])
  const [toSuggestions, setToSuggestions] = useState([])
  const [showFromSug, setShowFromSug] = useState(false)
  const [showToSug, setShowToSug] = useState(false)

  // Auto-search if query params are present
  useEffect(() => {
    if (searchParams.get('from') || searchParams.get('to')) {
      performSearch(searchParams.get('from') || '', searchParams.get('to') || '')
    } else {
      setResults(BUSES)
      setSearched(true)
    }
  }, [])

  function getSuggestions(value) {
    if (!value.trim() || value.length < 1) return []
    const v = value.toLowerCase()
    return ALL_STOPS.filter(s => s.toLowerCase().includes(v)).slice(0, 6)
  }

  function handleFromChange(val) {
    setFrom(val)
    const sug = getSuggestions(val)
    setFromSuggestions(sug)
    setShowFromSug(sug.length > 0)
  }

  function handleToChange(val) {
    setTo(val)
    const sug = getSuggestions(val)
    setToSuggestions(sug)
    setShowToSug(sug.length > 0)
  }

  function performSearch(f, t) {
    setLoading(true)
    setSearched(true)
    // Simulate network delay for realism
    setTimeout(() => {
      const found = searchBuses(f, t)
      setResults(found)
      setLoading(false)

      if (f || t) {
        fetch('/api/db/searches', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: f,
            to: t,
            travelDate: date,
            busType,
            resultsCount: found.length
          })
        }).catch(() => {})
      }
    }, 400)
  }

  function handleSearch(e) {
    e.preventDefault()
    setShowFromSug(false)
    setShowToSug(false)
    const params = {}
    if (from) params.from = from
    if (to) params.to = to
    if (date) params.date = date
    setSearchParams(params)
    performSearch(from, to)
  }

  function swapStops() {
    const tmp = from
    setFrom(to)
    setTo(tmp)
  }

  function clearSearch() {
    setFrom('')
    setTo('')
    setSearchParams({})
    setResults(BUSES)
    setSearched(true)
  }

  function getSortedFiltered() {
    let list = results.filter(bus =>
      busType === 'All' || bus.busType === busType
    )
    switch (sortBy) {
      case 'fare':
        list = [...list].sort((a, b) => a.fare - b.fare)
        break
      case 'seats':
        list = [...list].sort((a, b) => b.totalSeats - a.totalSeats)
        break
      default:
        list = [...list].sort((a, b) => {
          const aTime = a.schedule[0]?.departure || '00:00'
          const bTime = b.schedule[0]?.departure || '00:00'
          return aTime.localeCompare(bTime)
        })
    }
    return list
  }

  const displayBuses = getSortedFiltered()
  const hasQuery = from || to

  return (
    <div className={styles.page}>
      {/* Search Panel */}
      <div className={styles.searchPanel}>
        <div className="container">
          <div className={styles.searchHeader}>
            <h1 className={styles.title}>Find a Bus</h1>
            <p className={styles.subtitle}>Search Mumbai BEST bus routes</p>
          </div>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.fields}>
              {/* From */}
              <div className={`input-group ${styles.inputWrap}`} style={{ position: 'relative' }}>
                <label className="input-label">From</label>
                <div className="input-icon-wrap">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="10"/>
                  </svg>
                  <input
                    type="text"
                    className="input"
                    placeholder="e.g. Borivali Station"
                    value={from}
                    onChange={e => handleFromChange(e.target.value)}
                    onFocus={() => setShowFromSug(fromSuggestions.length > 0)}
                    onBlur={() => setTimeout(() => setShowFromSug(false), 200)}
                    aria-label="From stop"
                    autoComplete="off"
                  />
                </div>
                {showFromSug && (
                  <div className={styles.suggestions}>
                    {fromSuggestions.map(s => (
                      <button
                        key={s}
                        type="button"
                        className={styles.suggestion}
                        onMouseDown={() => { setFrom(s); setShowFromSug(false) }}
                      >
                        📍 {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Swap */}
              <button
                type="button"
                className={styles.swapBtn}
                onClick={swapStops}
                aria-label="Swap stops"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/>
                </svg>
              </button>

              {/* To */}
              <div className={`input-group ${styles.inputWrap}`} style={{ position: 'relative' }}>
                <label className="input-label">To</label>
                <div className="input-icon-wrap">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <input
                    type="text"
                    className="input"
                    placeholder="e.g. Andheri Station"
                    value={to}
                    onChange={e => handleToChange(e.target.value)}
                    onFocus={() => setShowToSug(toSuggestions.length > 0)}
                    onBlur={() => setTimeout(() => setShowToSug(false), 200)}
                    aria-label="To stop"
                    autoComplete="off"
                  />
                </div>
                {showToSug && (
                  <div className={styles.suggestions}>
                    {toSuggestions.map(s => (
                      <button
                        key={s}
                        type="button"
                        className={styles.suggestion}
                        onMouseDown={() => { setTo(s); setShowToSug(false) }}
                      >
                        📍 {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Date */}
              <div className="input-group">
                <label className="input-label">Date</label>
                <input
                  type="date"
                  className="input"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  aria-label="Travel date"
                />
              </div>
            </div>

            <div className={styles.searchActions}>
              <button type="submit" className="btn btn-primary" style={{ minWidth: '140px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                Search
              </button>
              {hasQuery && (
                <button type="button" className="btn btn-ghost" onClick={clearSearch}>
                  Clear
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Results */}
      <div className="container" style={{ padding: '32px var(--container-padding, 16px)', paddingBottom: '80px' }}>
        {/* Filters & sort */}
        <div className={styles.resultsHeader}>
          <div className={styles.filterRow}>
            <span className={styles.resultCount}>
              {loading ? 'Searching...' : `${displayBuses.length} bus${displayBuses.length !== 1 ? 'es' : ''} found`}
            </span>
            <div className={styles.filters}>
              {/* Bus type filter */}
              <div className={styles.filterGroup}>
                {BUS_TYPES.map(type => (
                  <button
                    key={type}
                    className={`${styles.filterBtn} ${busType === type ? styles.filterBtnActive : ''}`}
                    onClick={() => setBusType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                className="input"
                style={{ padding: '8px 12px', fontSize: '13px', maxWidth: '180px' }}
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                aria-label="Sort results"
              >
                {SORT_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Bus list */}
        {loading ? (
          <div className={styles.grid}>
            {[1, 2, 3, 4, 5, 6].map(i => <SkeletonCard key={i} />)}
          </div>
        ) : displayBuses.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🚌</div>
            <div className="empty-state-title">No buses found</div>
            <p className="empty-state-desc">
              {hasQuery
                ? `No buses found for "${from || ''}${from && to ? ' → ' : ''}${to || ''}". Try different stops or clear filters.`
                : 'No buses available at the moment.'}
            </p>
            <button className="btn btn-secondary" onClick={clearSearch}>
              Show All Buses
            </button>
          </div>
        ) : (
          <div className={styles.grid}>
            {displayBuses.map(bus => (
              <BusCard key={bus.id} bus={bus} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
