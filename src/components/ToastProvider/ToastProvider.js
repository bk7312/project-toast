import React, { useCallback } from 'react';

import useEscapeKey from '../../hooks/useEscapeKey';
export const ToastContext = React.createContext()
const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([])
  const handleEsc = useCallback(() => setToastList([]), [])
  useEscapeKey(handleEsc)

  function addToast({message, variant}) {
    setToastList(currList => [...currList, { message, variant, id: crypto.randomUUID() }])
  }

  function handleDismiss(id) {
    setToastList(currList => currList.filter(c => c.id !== id))
  }
  const value = {
    toastList,
    addToast,
    handleDismiss,
    VARIANT_OPTIONS,
  }
  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
