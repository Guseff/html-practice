import React, { Component } from 'react';

import Header from './components/Header';
import SideBar from './components/SideBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <SideBar />
      </div>
    );
  }
}

export default App;
