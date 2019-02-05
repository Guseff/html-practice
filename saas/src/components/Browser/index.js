import React, { Component } from 'react';

import FirstMini from '../FirstMini';

import imgMain from '../../assets/images/bkg-browser.png';
import imgGirl from '../../assets/images/girl-booty-bkg.svg';
import imgBoy from '../../assets/images/man-bkg.svg';

import './style.css';

class Browser extends Component {
  render() {
    return (
      <div className="first-section">
        <div className="browser-wrap">
          <img alt='' src={imgMain} className='browser-main' />
          <img alt='' src={imgGirl} className='browser-girl' />
          <img alt='' src={imgBoy} className='browser-boy' />
        </div>
        <div className="mini-wrap">
          <FirstMini active={true} />
          <FirstMini active={false} />
          <FirstMini active={false} />
        </div>
      </div>
    );
  }
}

export default Browser;
