import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styles from './NavBar2.module.css';
import leftUnfoldStyles2 from '../../shared/transitions/left-unfold/left-unfold2.module.css';
export default class SecondNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { displayed: false };
  }
  render() {
    return (
      <>
        <nav className={styles.nav}>
          <CSSTransition
            in={this.state.displayed}
            timeout={1000}
            classNames={{ ...leftUnfoldStyles2 }}
            unmountOnExit
          >
            <div className={styles.linkListContainer}>
              <ul className={styles.linkList}>
                <li className={styles.linkElement}>
                  <Link className={styles.link} to='/tic-tac-toe'>
                    Tic-Tac-Toe
                  </Link>
                </li>
                <li className={styles.linkElement}>
                  <Link className={styles.link} to='/random-quote-generator'>
                    Random-Quote-Machine
                  </Link>
                </li>
                <li className={styles.linkElement}>
                  <Link className={styles.link} to='/drum-machine'>
                    Drum-Machine
                  </Link>
                </li>
                <li className={styles.linkElement}>
                  <Link className={styles.link} to='/calculator'>
                    Calculator
                  </Link>
                </li>
                <li className={styles.linkElement}>
                  <Link className={styles.link} to='/random'>
                    random
                  </Link>
                </li>
              </ul>
            </div>
          </CSSTransition>
          <button
            onClick={() => this.setState((ps) => ({ displayed: !ps.displayed }))}
            className={styles.displayButton}
          >
            Display NavBar
          </button>
        </nav>
      </>
    );
  }
}
