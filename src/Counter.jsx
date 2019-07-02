import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  static propTypes = {
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number
  };

  constructor() {
    super();

    this.state = { counter: 0 };
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this._handleChange(-1)}>-</button>
        <span className="value">{this.state.counter}</span>
        <button onClick={this._handleChange(1)}>+</button>
      </div>
    );
  }

  _handleChange = direction => () => {
    const { step = 1, min, max } = this.props;
    const newValue = this.state.counter + direction * step;

    if (
      (min === undefined && max === undefined) ||
      (min !== undefined && max === undefined && newValue >= min) ||
      (max !== undefined && min === undefined && newValue <= max) ||
      (min <= newValue && newValue <= max)
    ) {
      this.setState({ counter: newValue });
    }
  };
}

export default Counter;
