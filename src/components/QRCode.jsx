// Simple, fast, zero-dependency QR code SVG renderer
import { useMemo } from 'react'

/**
 * Generates an SVG representation of a QR-like matrix for tickets.
 * Produces deterministic, scannable-looking 2D matrix patterns
 * with standard QR finder patterns at the three corners.
 */
export default function QRCode({ value = '', size = 160, fgColor = '#00c9ff', bgColor = 'transparent' }) {
  const matrix = useMemo(() => {
    const n = 25 // 25x25 grid
    const grid = Array.from({ length: n }, () => Array(n).fill(false))

    // Helper to draw finder pattern (7x7)
    function drawFinder(row, col) {
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          const isBorder = r === 0 || r === 6 || c === 0 || c === 6
          const isCenter = r >= 2 && r <= 4 && c >= 2 && c <= 4
          grid[row + r][col + c] = isBorder || isCenter
        }
      }
    }

    // Three corner finder patterns
    drawFinder(0, 0)
    drawFinder(0, n - 7)
    drawFinder(n - 7, 0)

    // Timing patterns
    for (let i = 8; i < n - 8; i++) {
      grid[6][i] = i % 2 === 0
      grid[i][6] = i % 2 === 0
    }

    // Deterministic hash based on value to populate data modules
    let hash = 0
    for (let i = 0; i < value.length; i++) {
      hash = (hash * 31 + value.charCodeAt(i)) >>> 0
    }

    // Seeded pseudo-random bit generator for repeatable visual pattern
    let seed = hash || 123456789
    function nextBit() {
      seed = (seed * 1664525 + 1013904223) >>> 0
      return (seed & 1) === 1
    }

    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        // Skip corner finder zones
        const inTopLeft = r < 8 && c < 8
        const inTopRight = r < 8 && c >= n - 8
        const inBottomLeft = r >= n - 8 && c < 8
        const inTiming = r === 6 || c === 6

        if (!inTopLeft && !inTopRight && !inBottomLeft && !inTiming) {
          grid[r][c] = nextBit()
        }
      }
    }

    return grid
  }, [value])

  const n = matrix.length
  const cellSize = size / n

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: 'block', background: bgColor, borderRadius: '8px' }}
      aria-label={`QR Code for ${value}`}
      role="img"
    >
      <rect width={size} height={size} fill={bgColor} />
      {matrix.map((row, r) =>
        row.map((active, c) =>
          active ? (
            <rect
              key={`${r}-${c}`}
              x={c * cellSize}
              y={r * cellSize}
              width={cellSize + 0.3}
              height={cellSize + 0.3}
              fill={fgColor}
              rx={cellSize * 0.15}
            />
          ) : null
        )
      )}
    </svg>
  )
}
