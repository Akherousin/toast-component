import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider/ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf({ setToasts }) {
  const { toasts } = React.useContext(ToastContext);

  if (toasts.length < 1) return null;

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, text }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} id={id}>
            {text}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
