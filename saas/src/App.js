import React, { Component } from 'react';

import Header from './components/Header';
import StartWhite from './components/StartWhite';
import StartBlue from './components/StartBlue';
import Browser from './components/Browser';
import UglyBlock from './components/UglyBlock';
import FinalBlock from './components/FinalBlock';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StartWhite />
        <Browser />
        <UglyBlock 
          right = {true} 
          title = {'Second Title'}
          descr = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque.'}
        />
        <UglyBlock 
          right = {false} 
          title = {'Third Title'}
          descr = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque.'}
        />
        <FinalBlock />
        <StartBlue />
        <Footer />
      </div>
    );
  }
}

export default App;
