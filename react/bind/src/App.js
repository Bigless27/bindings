import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      oneWayBinding: 'This is a one way Binding',
      twoWayBinding: ''
    }
  }

  updateBinding = (e) => {
    let twoWayBinding = e.target.value;
    this.setState(oldState => ({
      ...oldState,
      twoWayBinding
    }))
  }

  render() {
    let state = this.state;
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="loc-logo"></div>
        <h3>One and Two Way Binding in React</h3>
        <div className="flex-container flex-vertical-center">
          <h3>One Way Binding: </h3>
          <div>{state.oneWayBinding}</div>
        </div>
        <div>
          <h3>Two Way Binding</h3>
          <input value={state.twoWayBinding} onChange={(e) => this.updateBinding(e)} />
          <div>{state.twoWayBinding}</div>
        </div>
      </div>
    );
  }
}

export default App;
