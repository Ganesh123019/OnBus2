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
  - MongoDB Atlas or self-hosted MongoDB storing:
    - Hashed user accounts and profiles
    - Complete ticket bookings and transactions
    - Passenger contact details, route, date, and time
    - Search history and activity logs
    - Revenue and booking statistics
  - Unique indexes protect against duplicate users, bookings, and transactions.

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, React Router 6
- **Mapping & Geolocation**: Leaflet and route metadata
- **Backend / Storage**: MongoDB with the native Node.js driver
- **Authentication**: bcryptjs password hashing
- **Build Tool**: Vite 5

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or newer
- An active MongoDB deployment
- npm

### Environment Configuration

Create a `.env` file in the project root:

```env
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster.example.mongodb.net/onbus
MONGODB_DB_NAME=onbus
```

Do not commit the `.env` file. Keep the password out of source control and use a MongoDB user with the minimum required permissions.

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Run Tests

```bash
npm test
```

The tests use an isolated in-memory MongoDB instance and do not require a cloud database.

### Production Build

```bash
npm run build
npm run preview
```

## 📄 License

MIT License
