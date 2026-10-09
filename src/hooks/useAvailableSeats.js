import { useEffect, useState } from 'react'

export function useAvailableSeats(bus) {
  const [availableSeats, setAvailableSeats] = useState(bus?.totalSeats || 0)

  useEffect(() => {
    let active = true
    if (!bus) {
      setAvailableSeats(0)
      return () => { active = false }
    }

    const params = new URLSearchParams({ busId: bus.id })
    fetch(`/api/bookings?${params.toString()}`)
      .then(async response => {
        const result = await response.json()
        if (!response.ok || !result.success) {
          throw new Error(result.error || 'Unable to load seat availability')
        }
        return result.seats || []
      })
      .then(seats => {
        if (active) setAvailableSeats(Math.max(0, bus.totalSeats - seats.length))
      })
      .catch(error => {
        console.error(`Seat availability load failed for bus ${bus.id}:`, error)
      })

    return () => { active = false }
  }, [bus])

  return availableSeats
}
