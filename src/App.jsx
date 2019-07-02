import React, { Component } from 'react';
import Counter from './Counter.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = { counterValue: 10 };
  }

  render() {
    return (
      <div>
        <h1>Hello React :)</h1>
        <Counter
          step={5}
          min={0}
          max={30}
          onChange={newValue => this.setState({ counterValue: newValue })}
          value={this.state.counterValue}
        />
      </div>
    );
  }
}
export default App;
