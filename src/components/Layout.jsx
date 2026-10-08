import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import BottomNav from './BottomNav'
import ToastContainer from './ToastContainer'
import { useToast } from '../hooks/useToast'
import { createContext, useContext } from 'react'

const ToastContext = createContext(null)
export const useToastCtx = () => useContext(ToastContext)

export default function Layout() {
  const toast = useToast()
  const location = useLocation()
  const isMapPage = location.pathname === '/map'

  return (
    <ToastContext.Provider value={toast}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main
          className="page-enter"
          style={{
            flex: 1,
            paddingBottom: '72px', // space for mobile bottom nav
            paddingTop: 'var(--nav-height)'
          }}
        >
          <Outlet />
        </main>
        <BottomNav />
        <ToastContainer toasts={toast.toasts} onRemove={toast.removeToast} />
      </div>
    </ToastContext.Provider>
  )
}
