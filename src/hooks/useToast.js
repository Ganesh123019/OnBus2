// ON BUS V2 — Toast Notification Hook
import { useState, useCallback, useRef } from 'react'

let toastId = 0

export function useToast() {
  const [toasts, setToasts] = useState([])
  const timersRef = useRef({})

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id])
      delete timersRef.current[id]
    }
  }, [])

  const addToast = useCallback((message, type = 'info', duration = 3500) => {
    const id = ++toastId
    setToasts(prev => [...prev.slice(-3), { id, message, type }])
    timersRef.current[id] = setTimeout(() => removeToast(id), duration)
    return id
  }, [removeToast])

  const success = useCallback((msg) => addToast(msg, 'success'), [addToast])
  const error = useCallback((msg) => addToast(msg, 'error', 5000), [addToast])
  const info = useCallback((msg) => addToast(msg, 'info'), [addToast])

  return { toasts, addToast, removeToast, success, error, info }
}
