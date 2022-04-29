import React, { Component, createRef } from 'react';
import PadButton from 'shared/components/buttons/PadButton';
import styles from './Timer.module.css';
export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTime: new Date(new Date().getTime() + 1500000) - new Date(),
      currentSessionTime: new Date(new Date().getTime() + 1500000) - new Date(),
      breakTime: new Date(new Date().getTime() + 300000) - new Date(),
      currentBreakTime: new Date(new Date().getTime() + 300000) - new Date(),
      stopped: true,
      isSessionRunning: true,
    };
    this.currentSessionTimeout = null;
    this.currentBreakTimeout = null;
    this.alarm = createRef(null);
    this.addMinuteToSession = this.addMinuteToSession.bind(this);
    this.substractMinuteToSession = this.substractMinuteToSession.bind(this);
    this.addMinuteToBreak = this.addMinuteToBreak.bind(this);
    this.substractMinuteToBreak = this.substractMinuteToBreak.bind(this);
    this.toggleStart = this.toggleStart.bind(this);
    this.reset = this.reset.bind(this);
  }
  sessionSecondPassed() {
    if (this.state.isSessionRunning) {
      if (this.state.currentSessionTime) {
        this.currentSessionTimeout = setTimeout(() => {
          this.setState((ps) => ({ currentSessionTime: ps.currentSessionTime - 1000 }));
          this.sessionSecondPassed();
        }, 1000);
      } else {
        this.setState((ps) => ({
          currentSessionTime: ps.sessionTime,
          isSessionRunning: false,
        }));
        this.alarm.current.play();
        this.breakSecondPassed();
      }
    } else this.breakSecondPassed();
  }
  breakSecondPassed() {
    if (this.state.currentBreakTime) {
      this.currentBreakTimeout = this.currentBreakTimeout = setTimeout(() => {
        this.setState((ps) => ({ currentBreakTime: ps.currentBreakTime - 1000 }));
        this.breakSecondPassed();
      }, 1000);
    } else {
      this.setState((ps) => ({
        currentBreakTime: ps.breakTime,
        isSessionRunning: true,
      }));
      this.alarm.current.play();
      this.sessionSecondPassed();
    }
  }
  addMinuteToSession() {
    this.setState((ps) => {
      if (ps.stopped) {
        ps.currentSessionTime += 60000;
        ps.sessionTime += 60000;
      } else ps.currentSessionTime += 60000;
      return ps;
    });
  }
  substractMinuteToSession() {
    this.setState((ps) => {
      if (ps.stopped) {
        ps.currentSessionTime -= 60000;
        ps.sessionTime -= 60000;
      } else ps.currentSessionTime -= 60000;
      return ps;
    });
  }
  addMinuteToBreak() {
    this.setState((ps) => {
      if (ps.stopped) {
        ps.currentBreakTime += 60000;
        ps.breakTime += 60000;
      } else ps.currentBreakTime += 60000;
      return ps;
    });
  }
  substractMinuteToBreak() {
    this.setState((ps) => {
      if (ps.stopped) {
        ps.currentBreakTime -= 60000;
        ps.breakTime -= 60000;
      } else ps.currentBreakTime -= 60000;
      return ps;
    });
  }
  toggleStart() {
    this.setState((ps) => ({ stopped: !ps.stopped }));
    if (this.state.stopped) {
      //make sure the stopped state is changed before sessionSecondPassed is called
      setTimeout(() => {
        this.sessionSecondPassed();
      }, 0);
    } else {
      this.state.isSessionRunning
        ? clearTimeout(this.currentSessionTimeout)
        : clearTimeout(this.currentBreakTimeout);
    }
  }
  reset() {
    this.currentSessionTimeout && clearTimeout(this.currentSessionTimeout);
    this.currentBreakTimeout && clearTimeout(this.currentBreakTimeout);
    this.setState((ps) => ({
      currentBreakTime: ps.breakTime,
      currentSessionTime: ps.sessionTime,
      stopped: true,
      isSessionRunning: true,
    }));
  }
  render() {
    return (
      <div className={styles.timer}>
        <div className={styles.states}>
          <p>{this.state.stopped ? 'STOPPED' : 'COUNTING'}</p>
          <p>{this.state.isSessionRunning ? 'SESSION TIME' : 'BREAK TIME! IUJUUU!!!'}</p>
        </div>
        <div className={styles.timeContainer}>
          <div onClick={this.substractMinuteToSession}>
            <PadButton>-</PadButton>
          </div>
          <p
            className={`${styles.time} ${this.state.isSessionRunning && styles.currentTime} ${
              this.state.currentSessionTime < 60000 && styles.warningTime
            }`}
          >
            {new Date(this.state.currentSessionTime).toTimeString().slice(3, 8)}
          </p>
          <div onClick={this.addMinuteToSession}>
            <PadButton>+</PadButton>
          </div>
        </div>
        <div className={styles.timeContainer}>
          <div onClick={this.substractMinuteToBreak}>
            <PadButton>-</PadButton>
          </div>
          <p
            className={`${styles.time} ${!this.state.isSessionRunning && styles.currentTime} ${
              this.state.currentBreakTime < 60000 && styles.warningTime
            }`}
          >
            {new Date(this.state.currentBreakTime).toTimeString().slice(3, 8)}
          </p>
          <div onClick={this.addMinuteToBreak}>
            <PadButton>+</PadButton>
          </div>
        </div>
        <div className={styles.startAndReset}>
          <div onClick={this.toggleStart}>
            <PadButton>Start</PadButton>
          </div>
          <div onClick={this.reset}>
            <PadButton>Reset</PadButton>
          </div>
        </div>
        <audio
          ref={this.alarm}
          src='https://www.orangefreesounds.com/wp-content/uploads/2022/03/Analog-alarm-clock-bell-rings-short-sound-effect.mp3?_=1'
        ></audio>
      </div>
    );
  }
}
