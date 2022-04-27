import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import buttonPressStyles from '../../transitions/button-press/button-press.module.css';
import styles from './CalculatorButton.module.css';
export default class CalculatorButton extends Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
    this.press = this.press.bind(this);
    this.unpress = this.unpress.bind(this);
  }
  press() {
    this.setState({ pressed: true });
    !this.props.disabled && this.props.action();
  }
  unpress() {
    this.setState({ pressed: false });
  }
  render() {
    return (
      <CSSTransition
        in={this.state.pressed} //begins in false
        timeout={100}
        classNames={{ ...buttonPressStyles }}
      >
        <button className={styles.button} onPointerDown={this.press} onPointerUp={this.unpress}>
          {this.props.children}
        </button>
      </CSSTransition>
    );
  }
}
