import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  static propTypes = {
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
    value: PropTypes.number.isRequired
  };

  render() {
    return (
      <div className="counter">
        <button onClick={this._handleChange(-1)}>-</button>
        <span className="value">{this.props.value}</span>
        <button onClick={this._handleChange(1)}>+</button>
      </div>
    );
  }

  _handleChange = direction => () => {
    const { step = 1, min, max, onChange, value } = this.props;
    const newValue = value + direction * step;

    if (
      (min === undefined && max === undefined) ||
      (min !== undefined && max === undefined && newValue >= min) ||
      (max !== undefined && min === undefined && newValue <= max) ||
      (min <= newValue && newValue <= max)
    ) {
      if (onChange) {
        onChange(newValue);
      }
    }
  };
}

export default Counter;
