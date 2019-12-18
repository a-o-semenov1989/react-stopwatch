import React, { Component } from 'react';
import './app.css';
import Stopwatch from '../stopwatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stopwatch</h1>
        <Stopwatch />
      </div>
    );    
  }
}

export default App;
