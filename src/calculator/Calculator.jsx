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
            <CalculatorButton>AC</CalculatorButton>
          </div>
          <div className={styles.divide}>
            <CalculatorButton>/</CalculatorButton>
          </div>
          <div className={styles.multiply}>
            <CalculatorButton>X</CalculatorButton>
          </div>
          <div className={styles.seven}>
            <CalculatorButton>7</CalculatorButton>
          </div>
          <div className={styles.eight}>
            <CalculatorButton>8</CalculatorButton>
          </div>
          <div className={styles.nine}>
            <CalculatorButton>9</CalculatorButton>
          </div>
          <div className={styles.minus}>
            <CalculatorButton>-</CalculatorButton>
          </div>
          <div className={styles.four}>
            <CalculatorButton>4</CalculatorButton>
          </div>
          <div className={styles.five}>
            <CalculatorButton>5</CalculatorButton>
          </div>
          <div className={styles.six}>
            <CalculatorButton>6</CalculatorButton>
          </div>
          <div className={styles.plus}>
            <CalculatorButton>+</CalculatorButton>
          </div>
          <div className={styles.one}>
            <CalculatorButton>1</CalculatorButton>
          </div>
          <div className={styles.two}>
            <CalculatorButton>2</CalculatorButton>
          </div>
          <div className={styles.three}>
            <CalculatorButton>3</CalculatorButton>
          </div>
          <div className={styles.cero}>
            <CalculatorButton>0</CalculatorButton>
          </div>
          <div className={styles.dot}>
            <CalculatorButton>.</CalculatorButton>
          </div>
          <div className={styles.equal}>
            <CalculatorButton>=</CalculatorButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
