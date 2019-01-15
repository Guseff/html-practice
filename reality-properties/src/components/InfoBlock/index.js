import React, { Component } from 'react';

import './style.css';

class InfoBlock extends Component {
  render() {
    return (
      <div className="info-block">
        <div className="info-title blue">
          Aktas Properties Information
        </div>
        <p className="info-subscribe gray">
          1234 Hacker St, San Francisco
        </p>
        <p className="info-subscribe gray">
          (123) 456-7890
        </p>
        <p className="info-subscribe gray">
          Mon — Sun: 8:00am - 6:00pm
        </p>
      </div>
    );
  }
}

export default InfoBlock;
