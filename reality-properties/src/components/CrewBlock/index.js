import React, { Component } from 'react';

import girl from '../../assets/images/girl-1@2x.png';

import './style.css';

class CrewBlock extends Component {
  render() {
    return (
      <div className="crew-block">
        <div className="crew-person">
          <img src={girl} className="crew-person--img" />
          <div className="crew-person--info">
            <div className="crew-person--name">
              Opi Watihana
            </div>
            <div className="crew-person--position">
              Sales Manager
            </div>
          </div>
        </div>
        <button className="btn-medium--blue">
          Contact
        </button>
      </div>
    );
  }
}

export default CrewBlock;
