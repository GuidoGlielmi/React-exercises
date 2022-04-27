import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import buttonPressStyles from '../../transitions/button-press/button-press.module.css';
import styles from './PadButton.module.css';
export default class PadButton extends Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
    this.press = this.press.bind(this);
    this.unpress = this.unpress.bind(this);
  }
  componentDidMount() {
    const actionOnKeyStroke = (e) => {
      if (e.repeat) return;
      if (e.key === this.props.keyTrigger) this.press();
    };
    if (this.props.keyTrigger) {
      window.addEventListener('keydown', actionOnKeyStroke);
      window.addEventListener('keyup', this.unpress);
    }
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
        <button className={styles.pad} onPointerDown={this.press} onPointerUp={this.unpress}>
          {this.props.children}
        </button>
      </CSSTransition>
    );
  }
}
