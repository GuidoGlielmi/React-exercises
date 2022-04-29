import React from 'react';
import styles from './Toolbar.module.css';
export default function Toolbar({ children, action, resized }) {
  return (
    <div className={styles.toolbar}>
      <h2 className={styles.title}>{children}</h2>
      <i
        onClick={action}
        className={`${styles.resizeIcon} fa ${resized ? 'fa-chevron-down' : 'fa-chevron-up'}`}
      />
    </div>
  );
}
