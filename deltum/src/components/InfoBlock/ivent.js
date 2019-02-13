import React, { Component } from 'react';

import './style.css';

import img from '../../assets/images/winners.svg';

class Event extends Component {
  render() {
    return (
      <div className="event">
        <img alt='' src={img} />
      </div>
    );
  }
}

export default Event;
