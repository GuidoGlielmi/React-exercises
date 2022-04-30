import React from 'react';
import { Square } from './Square';
import './tic-tac-toe.css';

/*
  ANNOTATION ABOUT WORKING WITH CLASSES:
  - Whenever binding to a state (or any owned properties), that reference will always be the current one, unless saving it in another memory reference.
  - unlike react with functions, the previous state can be returned from the setState
  - Spread operator changes the memory reference in the outer layer props, it doesn't work with inner levels (of arrays of arrays, for example).
*/
export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xOrO: 'X',
      status: 'Next player: X',
      history: [
        [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
      ],
      flatCurrentHistory: ['', '', '', '', '', '', '', '', ''],
      selectedHistIndex: 0,
      counter: 0,
      goBackButtons: [],
      disabled: false,
    };
    this.nextTurn = this.nextTurn.bind(this);
    this.reset = this.reset.bind(this);
  }
  renderSquare(i) {
    return (
      <Square nextTurn={this.nextTurn} i={i} disabled={this.state.disabled}>
        {this.state.flatCurrentHistory[i]}
      </Square>
    );
  }
  nextTurn(boardCoordinate) {
    function unflat(arr, n) {
      let count = 0;
      const newArr = [];
      while (count < arr.length) {
        let subCount = 0;
        const subArr = [];
        while (subCount < n && count < arr.length) {
          subArr.push(arr[count]);
          subCount++;
          count++;
        }
        newArr.push(subArr);
        subCount = 0;
      }
      return newArr;
    }
    this.setState((state) => {
      //const x = Math.floor((i + 0.99) / 3);//
      //const y = i - x * 3;
      const newFlatCurrentHistory = state.flatCurrentHistory;
      state.flatCurrentHistory[boardCoordinate] = state.xOrO;

      const newHistory = unflat(newFlatCurrentHistory, 3);
      state.history = state.history.slice(0, this.state.counter + 1);
      state.history.push(newHistory);

      if (
        newFlatCurrentHistory[4] &&
        newFlatCurrentHistory[4] === newFlatCurrentHistory[3] &&
        newFlatCurrentHistory[4] === newFlatCurrentHistory[5]
      ) {
        state.status = `Winner: ${state.xOrO}`;
        state.disabled = true;
        return state;
      }
      if (
        newFlatCurrentHistory[4] &&
        newFlatCurrentHistory[4] === newFlatCurrentHistory[0] &&
        newFlatCurrentHistory[4] === newFlatCurrentHistory[8]
      ) {
        state.status = `Winner: ${state.xOrO}`;
        state.disabled = true;
        return state;
      }
      if (
        newFlatCurrentHistory[4] &&
        newFlatCurrentHistory[4] === newFlatCurrentHistory[1] &&
        newFlatCurrentHistory[4] === newFlatCurrentHistory[7]
      ) {
        state.status = `Winner: ${state.xOrO}`;
        state.disabled = true;
        return state;
      }
      if (
        newFlatCurrentHistory[4] &&
        newFlatCurrentHistory[4] === newFlatCurrentHistory[2] &&
        newFlatCurrentHistory[4] === newFlatCurrentHistory[6]
      ) {
        state.status = `Winner: ${state.xOrO}`;
        state.disabled = true;
        return state;
      }
      if (
        newFlatCurrentHistory[0] &&
        newFlatCurrentHistory[0] === newFlatCurrentHistory[3] &&
        newFlatCurrentHistory[0] === newFlatCurrentHistory[6]
      ) {
        state.status = `Winner: ${state.xOrO}`;
        state.disabled = true;
        return state;
      }
      if (
        newFlatCurrentHistory[0] &&
        newFlatCurrentHistory[0] === newFlatCurrentHistory[3] &&
        newFlatCurrentHistory[0] === newFlatCurrentHistory[6]
      ) {
        state.status = `Winner: ${state.xOrO}`;
        state.disabled = true;
        return state;
      }
      if (
        newFlatCurrentHistory[8] &&
        newFlatCurrentHistory[8] === newFlatCurrentHistory[7] &&
        newFlatCurrentHistory[8] === newFlatCurrentHistory[6]
      ) {
        state.status = `Winner: ${state.xOrO}`;
        state.disabled = true;
        return state;
      }
      if (
        newFlatCurrentHistory[8] &&
        newFlatCurrentHistory[8] === newFlatCurrentHistory[5] &&
        newFlatCurrentHistory[8] === newFlatCurrentHistory[2]
      ) {
        state.status = `Winner: ${state.xOrO}`;
        state.disabled = true;
        return state;
      }

      if (!(state.counter % 2)) {
        state.xOrO = 'O';
        state.status = 'Next player: O';
      } else {
        state.xOrO = 'X';
        state.status = 'Next player: X';
      }

      const n = state.counter;
      state.goBackButtons = state.goBackButtons.slice(0, n);
      state.goBackButtons.push(
        <button
          onClick={() => this.goBack(n + 1)}
          className='goBackButton'
          key={state.goBackButtons.length}
        >{`Go to move nº${n + 1}`}</button>,
      );

      state.counter++;
      state.selectedHistIndex++;
      if (state.counter === 9) state.status = 'Draw';
      return state;
    });
  }
  goBack(i) {
    this.setState((state) => {
      state.flatCurrentHistory = state.history[i].reduce((arr, nextArr) => arr.concat(nextArr));
      if (i % 2) {
        state.xOrO = 'O';
        state.status = 'Next player: O';
      } else {
        state.xOrO = 'X';
        state.status = 'Next player: X';
      }
      state.counter = i;
      state.disabled = false;
      return state;
    });
  }
  reset() {
    this.setState({
      xOrO: 'X',
      status: 'Next player: X',
      history: [
        [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
      ],
      flatCurrentHistory: ['', '', '', '', '', '', '', '', ''],
      selectedHistIndex: 0,
      counter: 0,
      goBackButtons: [],
      disabled: false,
    });
  }
  render() {
    return (
      <div className='boardContainer'>
        <div className='board'>
          <div className='status'>{this.state.status}</div>
          <div className='board-row'>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className='board-row'>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className='board-row'>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
        <div className='buttons'>
          <button onClick={this.reset}>Reset</button>
          <button onClick={() => this.goBack(0)} className='goBackButton'>
            Go to start
          </button>
          {[this.state.goBackButtons]}
        </div>
      </div>
    );
  }
}
