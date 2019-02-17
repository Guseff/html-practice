import React, { Component } from 'react';

import BtnEvent from '../InfoBlock/btnEvent.js';
import InfoDo from './infoDo.js';

import './style.css';

import img from '../../assets/images/winners.svg';
import timeico from '../../assets/images/ico-clock.svg';

const INFO_DO = [
  {
    img: require('../../assets/images/ico-share.svg'),
    text: 'Share',
  },{
    img: require('../../assets/images/ico-bookmark.svg'),
    text: 'Save',
  },{
    img: require('../../assets/images/ico-more.svg'),
    text: 'More',
  },
]; 

class Event extends Component {
  render() {
    return (
      <div>
        <div className="event">
          <img alt='' src={img} />
          <div className="event-subscr">
            <BtnEvent text={'3d days to go'} /> 
            <div className="event-subscr--title">
              Anniversary celebration 2018
            </div>
            <div className="event-subscr--text">
              Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord...
              {/* eslint-disable-next-line */}
              <a href='#'>Learn more</a>
            </div>
          </div>
        </div>
        <div className="info-block--separator"></div>
        <div className="event-info">
          <div className="event-info--time">
            <img alt='' src={timeico} />
            23 October 2018, 10:00AM
          </div>
          <ul className="event-info--do">
            {INFO_DO.map((data) => (
              <InfoDo data={data} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Event;
