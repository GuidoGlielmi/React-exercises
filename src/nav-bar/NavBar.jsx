import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styles from './NavBar.module.css';
import leftUnfoldStyles from '../shared/transitions/left-unfold/left-unfold.module.css';
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { displayed: false };
  }
  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.displayed}
          timeout={1000}
          classNames={{ ...leftUnfoldStyles }}
        >
          <nav>
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
              </ul>
            </div>
            <button
              onClick={() => this.setState((ps) => ({ displayed: !ps.displayed }))}
              className={styles.displayButton}
            >
              Display NavBar
            </button>
          </nav>
        </CSSTransition>
        {this.props.children}
      </div>
    );
  }
}
