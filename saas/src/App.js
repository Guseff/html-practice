import React, { Component } from 'react';

import Header from './components/Header';
import StartWhite from './components/StartWhite';
import StartBlue from './components/StartBlue';
import Browser from './components/Browser';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StartWhite />
        <Browser />
        <StartBlue />
      </div>
    );
  }
}

export default App;
