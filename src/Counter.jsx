import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  static propTypes = {
    step: PropTypes.number
  };

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
    const { step = 1 } = this.props;
    this.setState({ counter: this.state.counter + step });
  };

  _handleDecrement = () => {
    const { step = 1 } = this.props;
    this.setState({ counter: this.state.counter + -1 * step });
  };
}

export default Counter;
