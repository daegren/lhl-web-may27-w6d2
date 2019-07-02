import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();

    this.state = { counter: 0 };
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this._handleDecrement}>-</button>
        <span className="value">{this.state.counter}</span>
        <button onClick={this._handleIncrement}>+</button>
      </div>
    );
  }

  _handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  _handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
}

export default Counter;
