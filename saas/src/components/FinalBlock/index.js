import React, { Component } from 'react';

import FinalMini from '../FinalMini';
import img1 from '../../assets/images/ico-1.svg';
import img2 from '../../assets/images/ico-2.svg';
import img3 from '../../assets/images/ico-3.svg';

import './style.css';

class FinalBlock extends Component {
  render() {
    return (
      <div className="final-wrapper">
        <div className="final-title">
          Final Title
        </div>
        <div className="final-descr">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque.
        </div>
        <div className="final-mini-wrap">
          <FinalMini
            img = {img1}
            title = 'Be at peace.'
          />
          <FinalMini
            img = {img2}
            title = 'Be at peace.'
          />
          <FinalMini
            img = {img3}
            title = 'Be at peace.'
          />
        </div>
      </div>
    );
  }
}

export default FinalBlock;
