import React, { Component } from 'react';
import CalculatorButton from '../shared/components/buttons/CalculatorButton';
import styles from './Calculator.module.css';
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculation: '',
      enteredValue: '',
      previousValue: '',
      lastOperator: '',
      operatorEntered: false,
      objeto: ['asd'],
    };
    this.appendToEnteredValue = this.appendToEnteredValue.bind(this);
    this.enterOperator = this.enterOperator.bind(this);
    this.allClear = this.allClear.bind(this);
    this.calculate = this.calculate.bind(this);
    this.erase = this.erase.bind(this);
    // this.eval("2+5*3") parses an expression (would be useful for a ecuation-logic calculator, not the immediate-execution-logic that this app is)
  }
  appendToEnteredValue(value) {
    this.setState((ps) => {
      if (ps.operatorEntered) ps.enteredValue = '';
      ps.operatorEntered = false;
      if (ps.enteredValue[0] === '0' && value === '0') return ps;
      if (ps.enteredValue.includes('.') && value === '.') return ps;
      ps.enteredValue += value;
      ps.calculation += value;
      return ps;
    });
  }
  enterOperator(value) {
    this.setState((ps) => {
      if (!ps.previousValue && !ps.enteredValue) return ps;
      if (ps.operatorEntered) {
        if (value === '-') {
          ps.enteredValue = value;
          ps.calculation += value;
          ps.operatorEntered = false;
          return ps;
        }
        ps.lastOperator = ps.enteredValue = value;
        ps.calculation = ps.calculation.slice(0, -3) + ` ${value} `;
        return ps;
      }
      ps.operatorEntered = true;
      if (!ps.previousValue) {
        ps.previousValue = ps.enteredValue;
        ps.calculation += ` ${value} `;
        ps.enteredValue = value;
      } else {
        if (ps.lastOperator === '/') {
          ps.previousValue = parseFloat(ps.previousValue) / parseFloat(ps.enteredValue);
        }
        if (ps.lastOperator === 'X') {
          ps.previousValue = parseFloat(ps.previousValue) * parseFloat(ps.enteredValue);
        }
        if (ps.lastOperator === '-') {
          ps.previousValue = parseFloat(ps.previousValue) - parseFloat(ps.enteredValue);
        }
        if (ps.lastOperator === '+') {
          ps.previousValue = parseFloat(ps.previousValue) + parseFloat(ps.enteredValue);
        }
        if (!(ps.previousValue % 1)) ps.previousValue = Math.floor(ps.previousValue);
        // previousValue doesn't need to be string because won't be shown
        ps.calculation = `${ps.previousValue} ${value} `;
        ps.enteredValue = value; // only for display
      }
      ps.lastOperator = value;
      return ps;
    });
  }
  erase() {
    this.setState((ps) => {
      if (ps.enteredValue.length) {
        ps.enteredValue = ps.enteredValue.slice(0, -1);
        ps.calculation = ps.calculation.slice(0, -1);
      }
      return ps;
    });
  }
  calculate() {
    this.setState((ps) => {
      if (ps.enteredValue && ps.previousValue) {
        if (ps.lastOperator === '/') {
          ps.previousValue = parseFloat(ps.previousValue) / parseFloat(ps.enteredValue);
        }
        if (ps.lastOperator === 'X') {
          ps.previousValue = parseFloat(ps.previousValue) * parseFloat(ps.enteredValue);
        }
        if (ps.lastOperator === '-') {
          ps.previousValue = parseFloat(ps.previousValue) - parseFloat(ps.enteredValue);
        }
        if (ps.lastOperator === '+') {
          ps.previousValue = parseFloat(ps.previousValue) + parseFloat(ps.enteredValue);
        }
        if (!(ps.previousValue % 1)) ps.previousValue = Math.floor(ps.previousValue);
        ps.calculation = ps.enteredValue = `${ps.previousValue}`;
        ps.previousValue = '';
      }
      return ps;
    });
  }
  allClear() {
    this.setState({
      calculation: '',
      enteredValue: '',
      previousValue: '',
      lastOperator: '',
      operatorEntered: false,
    });
  }
  render() {
    return (
      <div className={styles.calculator}>
        <div className={styles.screen}>
          <div className={styles.calculation} id='display'>
            {this.state.calculation}
          </div>
          <div className={styles.enteredValue}>{this.state.enteredValue}</div>
        </div>
        <div className={styles.keyboard}>
          <div className={styles.allClear} id='clear'>
            <CalculatorButton action={this.allClear} keyCodeTrigger={8}>
              AC
            </CalculatorButton>
          </div>
          <div className={styles.backSpace}>
            <CalculatorButton action={this.erase} keyCodeTrigger={8}>
              {'<X>'}
            </CalculatorButton>
          </div>
          <div className={styles.divide} id='divide'>
            <CalculatorButton action={this.enterOperator} keyTrigger='/' keyCodeTrigger={111}>
              /
            </CalculatorButton>
          </div>
          <div className={styles.multiply} id='mmultiply'>
            <CalculatorButton action={this.enterOperator} keyTrigger='X' keyCodeTrigger={106}>
              X
            </CalculatorButton>
          </div>
          <div className={styles.seven} id='seven'>
            <CalculatorButton
              action={this.appendToEnteredValue}
              keyCodeTrigger={103}
              keyTrigger='7'
            >
              7
            </CalculatorButton>
          </div>
          <div className={styles.eight} id='eight'>
            <CalculatorButton
              action={this.appendToEnteredValue}
              keyCodeTrigger={104}
              keyTrigger='8'
            >
              8
            </CalculatorButton>
          </div>
          <div className={styles.nine} id='nine'>
            <CalculatorButton
              action={this.appendToEnteredValue}
              keyCodeTrigger={105}
              keyTrigger='9'
            >
              9
            </CalculatorButton>
          </div>
          <div className={styles.minus} id='substract'>
            <CalculatorButton action={this.enterOperator} keyTrigger='-' keyCodeTrigger={109}>
              -
            </CalculatorButton>
          </div>
          <div className={styles.four} id='four'>
            <CalculatorButton
              action={this.appendToEnteredValue}
              keyCodeTrigger={100}
              keyTrigger='4'
            >
              4
            </CalculatorButton>
          </div>
          <div className={styles.five} id='five'>
            <CalculatorButton
              action={this.appendToEnteredValue}
              keyCodeTrigger={101}
              keyTrigger='5'
            >
              5
            </CalculatorButton>
          </div>
          <div className={styles.six} id='six'>
            <CalculatorButton
              action={this.appendToEnteredValue}
              keyCodeTrigger={102}
              keyTrigger='6'
            >
              6
            </CalculatorButton>
          </div>
          <div className={styles.plus} id='add'>
            <CalculatorButton action={this.enterOperator} keyTrigger='+' keyCodeTrigger={107}>
              +
            </CalculatorButton>
          </div>
          <div className={styles.one} id='one'>
            <CalculatorButton action={this.appendToEnteredValue} keyCodeTrigger={97} keyTrigger='1'>
              1
            </CalculatorButton>
          </div>
          <div className={styles.two} id='two'>
            <CalculatorButton action={this.appendToEnteredValue} keyCodeTrigger={98} keyTrigger='2'>
              2
            </CalculatorButton>
          </div>
          <div className={styles.three} id='three'>
            <CalculatorButton action={this.appendToEnteredValue} keyCodeTrigger={99} keyTrigger='3'>
              3
            </CalculatorButton>
          </div>
          <div className={styles.cero} id='zero'>
            <CalculatorButton action={this.appendToEnteredValue} keyCodeTrigger={96} keyTrigger='0'>
              0
            </CalculatorButton>
          </div>
          <div className={styles.dot} id='decimal'>
            <CalculatorButton
              action={this.appendToEnteredValue}
              keyTrigger='.'
              keyCodeTrigger={110}
            >
              .
            </CalculatorButton>
          </div>
          <div className={styles.equal} id='equals'>
            <CalculatorButton action={this.calculate} keyCodeTrigger={13}>
              =
            </CalculatorButton>
          </div>
        </div>
        <div
          className={styles.enteredValue}
          onClick={() =>
            this.setState((ps) => {
              ps.objeto.push('asd');
              return ps;
            })
          }
        >
          {this.state.objeto.map((o, i) => {
            return <span key={i}>{o}</span>;
          })}
        </div>
      </div>
    );
  }
}

export default Calculator;
