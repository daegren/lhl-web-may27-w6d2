import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React :)</h1>
        <div className="counter">
          <button>-</button>
          <span className="value">{0}</span>
          <button>+</button>
        </div>
      </div>
    );
  }
}
export default App;
