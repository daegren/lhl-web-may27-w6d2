import React, { Component } from 'react';
import Counter from './Counter.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React :)</h1>
        <Counter step={5} min={0} max={30} />
      </div>
    );
  }
}
export default App;
