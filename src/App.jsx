import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import Layout from './components/Layout'
import Home from './pages/Home'
import FindBus from './pages/FindBus'
import BusDetails from './pages/BusDetails'
import LiveMap from './pages/LiveMap'
import MyTickets from './pages/MyTickets'
import Booking from './pages/Booking'
import TicketView from './pages/TicketView'
import Login from './pages/Login'
import Register from './pages/Register'

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth()
  return isLoggedIn ? children : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="find" element={<FindBus />} />
        <Route path="bus/:busId" element={<BusDetails />} />
        <Route path="map" element={<LiveMap />} />
        <Route path="tickets" element={<ProtectedRoute><MyTickets /></ProtectedRoute>} />
        <Route path="book/:busId" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
        <Route path="ticket/:ticketId" element={<ProtectedRoute><TicketView /></ProtectedRoute>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
