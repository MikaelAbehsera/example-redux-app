import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//  Imports for redux
import { connect } from "react-redux";
// Import actions
import { startAction } from "actions/startAction";
import { stopAction } from "actions/stopAction";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
