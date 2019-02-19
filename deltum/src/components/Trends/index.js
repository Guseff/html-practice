import React, { Component } from 'react';

import BtnInfo from '../InfoBlock/BtnInfo';

import arr from '../../assets/images/ico-arrow-down.svg';
import trend from '../../assets/images/trend.svg';

import './style.css';

class Trends extends Component {
  render() {
    return (
      <div>
        <div className="trends">
          <BtnInfo text={'View full stats'} />
          <div className="trends-title">
            Ticket trends
          </div>
          <div className="trends-subscr">
            46 tickets created in last 1 week
          </div>
          <div className="trends-change">
            (-2.02%)
            <img alt='' src={arr} />
          </div>
          <img alt='' src={trend} className="trends-img" />
        </div>
      </div>
    );
  }
}

export default Trends;
