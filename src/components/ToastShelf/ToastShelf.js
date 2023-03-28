import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToasts }) {
  if (toasts.length < 1) return null;

  const handleDismiss = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  };

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, text }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} handleDismiss={() => handleDismiss(id)}>
            {text}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
