import React, { Component } from 'react';

import StartForm from '../StartForm';

import './style.css';

class StartBlue extends Component {
  render() {
    return (
      <div className="start-blue">
        <div>
          <h2>Get started for free.</h2>
          <div className="start-blue-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </div>
        </div>
        <StartForm fmode={'dark'} />
      </div>
    );
  }
}

export default StartBlue;
