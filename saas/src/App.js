import React, { Component } from 'react';

import Header from './components/Header';
import StartWhite from './components/StartWhite';
import StartBlue from './components/StartBlue';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StartWhite />
        <StartBlue />
      </div>
    );
  }
}

export default App;
