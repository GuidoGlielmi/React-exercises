import React, { Component } from 'react';
import styles from './Random.module.css';
import RandomAsFunction from './RandomAsFunction';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  render() {
    return (
      <div>
        <div className={this.state.active ? styles.container : styles.container2}>
          <div className={styles.child}></div>
        </div>
        <button onClick={() => this.setState((ps) => ({ active: !ps.active }))}>HEIGHT</button>
        <RandomAsFunction />
      </div>
    );
  }
}

export default Random;
