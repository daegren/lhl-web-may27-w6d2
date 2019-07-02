import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        <h1>Hello React :)</h1>
        <div className="counter">
          <button onClick={this._handleDecrement}>-</button>
          <span className="value">{this.state.counter}</span>
          <button onClick={this._handleIncrement}>+</button>
        </div>
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
export default App;
