import React, { Component } from 'react';
import styles from './Random.module.css';

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
      </div>
    );
  }
}

export default Random;
