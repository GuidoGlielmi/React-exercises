import React, { Component } from 'react';
import CalculatorButton from '../shared/components/buttons/CalculatorButton';
import styles from './Calculator.module.css';
class Calculator extends Component {
  render() {
    return (
      <div className={styles.calculator}>
        <div className={styles.screen}>
          <div className={styles.calculation}>asdasdas</div>
          <div className={styles.enteredValue}>dfgdfgf</div>
        </div>
        <div className={styles.keyboard}>
          <div className={styles.allClear}>
            <CalculatorButton keyCodeTrigger={8}>AC</CalculatorButton>
          </div>
          <div className={styles.divide}>
            <CalculatorButton keyCodeTrigger={111}>/</CalculatorButton>
          </div>
          <div className={styles.multiply}>
            <CalculatorButton keyCodeTrigger={106}>X</CalculatorButton>
          </div>
          <div className={styles.seven}>
            <CalculatorButton keyCodeTrigger={103}>7</CalculatorButton>
          </div>
          <div className={styles.eight}>
            <CalculatorButton keyCodeTrigger={104}>8</CalculatorButton>
          </div>
          <div className={styles.nine}>
            <CalculatorButton keyCodeTrigger={105}>9</CalculatorButton>
          </div>
          <div className={styles.minus}>
            <CalculatorButton keyCodeTrigger={109}>-</CalculatorButton>
          </div>
          <div className={styles.four}>
            <CalculatorButton keyCodeTrigger={100}>4</CalculatorButton>
          </div>
          <div className={styles.five}>
            <CalculatorButton keyCodeTrigger={101}>5</CalculatorButton>
          </div>
          <div className={styles.six}>
            <CalculatorButton keyCodeTrigger={102}>6</CalculatorButton>
          </div>
          <div className={styles.plus}>
            <CalculatorButton keyCodeTrigger={107}>+</CalculatorButton>
          </div>
          <div className={styles.one}>
            <CalculatorButton keyCodeTrigger={97}>1</CalculatorButton>
          </div>
          <div className={styles.two}>
            <CalculatorButton keyCodeTrigger={98}>2</CalculatorButton>
          </div>
          <div className={styles.three}>
            <CalculatorButton keyCodeTrigger={99}>3</CalculatorButton>
          </div>
          <div className={styles.cero}>
            <CalculatorButton keyCodeTrigger={96}>0</CalculatorButton>
          </div>
          <div className={styles.dot}>
            <CalculatorButton keyCodeTrigger={110}>.</CalculatorButton>
          </div>
          <div className={styles.equal}>
            <CalculatorButton keyCodeTrigger={13}>=</CalculatorButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
