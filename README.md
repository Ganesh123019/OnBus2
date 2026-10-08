# 🚌 OnBus 2.0 - Smart City Bus Booking & Live Tracking System

OnBus 2.0 is a modern, real-time bus booking and transit telemetry web application designed for Mumbai's BEST bus transit network.

## ✨ Features

- **Fleet & Route Discovery**: Browse over 200+ active BEST bus routes across Mumbai (CSMT, Dadar, Bandra, Andheri, Borivali, Thane, and more).
- **Seat Selection & Instant Booking**: Interactive seat map selection with real-time availability.
- **Multiple Payment Methods**:
  - 💵 **Cash on Bus (Pay on Boarding)**: Reserve your seat and pay directly to the bus conductor.
  - 📱 **UPI / QR Code**: Instant UPI payments.
  - 💳 **Credit / Debit Cards**: Secure card payments.
- **Ticket-Restricted Live GPS Tracking**:
  - Live GPS tracking powered by Google Maps JavaScript API.
  - Tracking is secured and available only for confirmed bookings.
  - Live animated bus positioning, bearing updates, route polylines, and dynamic ETA estimation.
- **Persistent Data Storage**:
  - File-backed persistent JSON database recording:
    - User accounts & credentials
    - Full ticket booking history with transaction IDs, seats, fare, and route coordinates
    - Route search history & analytics
    - Conductor transaction logs & system statistics

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, React Router 6, Tailwind CSS
- **Mapping & Geolocation**: Google Maps JavaScript API (Custom dark mode, Polyline, Marker animations)
- **Backend / Storage**: REST API middleware with JSON persistence engine
- **Build Tool**: Vite 5

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ganesh123019/OnBus2.git
   cd OnBus2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## 📄 License

MIT License
