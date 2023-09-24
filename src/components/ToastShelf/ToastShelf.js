import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const {toastList, handleDismiss} = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toastList.map(({ message, variant, id }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} dismiss={() => handleDismiss(id)}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
