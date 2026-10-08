import { BUS_STATUS } from '../data/buses'

const STATUS_CONFIG = {
  [BUS_STATUS.LIVE]: {
    label: 'LIVE',
    className: 'badge badge-live'
  },
  [BUS_STATUS.ON_TIME]: {
    label: 'ON TIME',
    className: 'badge badge-ontime'
  },
  [BUS_STATUS.DELAYED]: {
    label: 'DELAYED',
    className: 'badge badge-delayed'
  },
  [BUS_STATUS.ARRIVING]: {
    label: 'ARRIVING',
    className: 'badge badge-arriving'
  },
  [BUS_STATUS.DEPARTED]: {
    label: 'DEPARTED',
    className: 'badge badge-departed'
  },
  [BUS_STATUS.CANCELLED]: {
    label: 'CANCELLED',
    className: 'badge badge-cancelled'
  }
}

export default function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status] || { label: status, className: 'badge badge-departed' }
  return (
    <span className={config.className} aria-label={`Status: ${config.label}`}>
      {config.label}
    </span>
  )
}
