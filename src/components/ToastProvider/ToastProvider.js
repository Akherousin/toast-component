import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    const dismissAllToasts = (e) => {
      if (e.code === 'Escape') {
        setToasts([]);
      }
    };

    window.addEventListener('keydown', dismissAllToasts);

    return window.removeEventListener('keydown', dismissAllToasts);
  }, []);

  const addNewToast = React.useCallback(
    (variant, text) => {
      const newToast = { variant, text, id: crypto.randomUUID() };

      setToasts([...toasts, newToast]);
    },
    [toasts]
  );

  const dismissToast = React.useCallback(
    (id) => {
      const nextToasts = toasts.filter((toast) => toast.id !== id);
      setToasts(nextToasts);
    },
    [toasts]
  );

  const value = React.useMemo(() => {
    return {
      toasts,
      addNewToast,
      dismissToast,
    };
  }, [toasts, addNewToast, dismissToast]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
