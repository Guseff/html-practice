import React, { Component } from 'react';

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
          <div className="first-mini first-mini--active">1</div>
          <div className="first-mini first-mini--active">2</div>
          <div className="first-mini first-mini--active">3</div>
        </div>
      </div>
    );
  }
}

export default Browser;
