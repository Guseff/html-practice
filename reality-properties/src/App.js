import React, { Component } from 'react';

import Header from './components/Header';
import PropertiesList from './components/PropertiesList';
import ContactList from './components/ContactList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <PropertiesList />
        <ContactList />
      </div>
    );
  }
}

export default App;
