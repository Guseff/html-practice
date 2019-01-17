import React, { Component } from 'react';

import girl from '../../assets/images/girl-1@2x.png';

import './style.css';

class CrewBlock extends Component {
  render() {
    return (
      <div className="crew-block">
        <img src={girl} className="crew-img" />
      </div>
    );
  }
}

export default CrewBlock;
