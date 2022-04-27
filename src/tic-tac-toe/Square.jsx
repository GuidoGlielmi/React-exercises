import React from 'react';
export class Square extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMarked = this.toggleMarked.bind(this);
  }
  toggleMarked() {
    this.props.nextTurn(this.props.i);
  }
  render() {
    return (
      <button
        onClick={this.toggleMarked}
        className='square'
        disabled={this.props.children || this.props.disabled}
      >
        {this.props.children}
      </button>
    );
  }
}
