import React, { Component } from 'react';

import Header from './components/Header';
import PropertiesList from './components/PropertiesList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <PropertiesList />
      </div>
    );
  }
}

export default App;
