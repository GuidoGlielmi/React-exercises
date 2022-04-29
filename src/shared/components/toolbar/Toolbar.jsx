import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Toolbar.module.css';
import dropdownStyles from 'shared/transitions/drop-down/drop-down.module.css';
export default function Toolbar({ children, title }) {
  const [resized, setResized] = useState(true);
  return (
    <div className={styles.toolbarAndContent}>
      <div className={styles.toolbar}>
        <h2 className={styles.title}>{title}</h2>
        <i
          onClick={() => setResized((ps) => !ps)}
          className={`${styles.resizeIcon} fa ${resized ? 'fa-chevron-up' : 'fa-chevron-down'}`}
        />
      </div>
      <CSSTransition in={resized} timeout={250} classNames={{ ...dropdownStyles }} appear={true}>
        {children}
      </CSSTransition>
    </div>
  );
}
