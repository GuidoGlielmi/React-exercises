import React, { Component } from 'react';
import styles from './Random.module.css';
import RandomAsFunction from './RandomAsFunction';
import { randomContext } from 'contexts/RandomContext';
class Random extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  componentDidUpdate() {
    console.log(this.context, this.props, this.state);
  }
  render() {
    return (
      <div>
        <div className={this.state.active ? styles.container : styles.container2}>
          <div className={styles.child}></div>
        </div>
        <button
          onClick={() =>
            this.setState((ps) => ({
              active: !ps.active,
            }))
          }
        >
          HEIGHT
        </button>
        <RandomAsFunction randomProp={this.state.active} />
      </div>
    );
  }
}
Random.contextType = randomContext;
export default Random;
