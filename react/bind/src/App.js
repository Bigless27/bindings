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
    let { oneWayBinding, twoWayBinding } = this.state;
    return (
      <div className="App flex-container flex-horizontal-center">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="flex-container flex-center">
            <div className="loc-logo"></div>
          </div>
          <h1>One and Two Way Binding in React</h1>
          <div className="flex-container flex-column flex-horizontal-start">
            <div className="flex-container flex-vertical-center">
              <h3 className="one-way">One Way Binding: </h3>
              <div>{oneWayBinding}</div>
            </div>
            <div className="flex-container flex-veritcal-center">
              <h3>Two Way Binding: </h3>
              <div className="flex-container flex-vertical-center">
                <input className="twoBind" value={twoWayBinding} onChange={(e) => this.updateBinding(e)} />
              </div>
            </div>
            <div className="flex-container">
              <div className="react-results">React Results: </div>
              <div>{twoWayBinding}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
