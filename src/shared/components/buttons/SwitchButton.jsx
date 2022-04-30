import React from 'react';
import { CSSTransition } from 'react-transition-group';
import switchSideToSide from '../../transitions/switch-side-to-side/switchSideToSide.module.css';
import styles from './SwitchButton.module.css';

export default function SwitchButton({ trigger, action, timeout }) {
  return (
    <div onClick={action} className={styles.bank}>
      <CSSTransition in={trigger} timeout={timeout} classNames={{ ...switchSideToSide }}>
        <div className={styles.bankSelection}></div>
      </CSSTransition>
    </div>
  );
}
