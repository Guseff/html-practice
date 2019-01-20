import React, { Component } from 'react';
import Swiper from 'swiper';

import Client from '../Client';

import './style.css';

import photo1 from '../../assets/images/boy@2x.png';
import photo2 from '../../assets/images/girl-1@2x.png';
import photo3 from '../../assets/images/girl-2@2x.png';
import nextArrow from '../../assets/images/left-arrow.svg';
import prevArrow from '../../assets/images/right-arrow.svg';

class Swip extends Component {
  render() {
    
    const text = 'Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself. Like buying a new car before you actually got that new job. Well, when setting and obtaining your goals, you need to What you profess, you possess!';
    const name1 = 'Oluchi Mazi';
    const name2 = 'Bansilal Brata';
    const name3 = 'Fariba Mirzaii';

    return (
      <section className="section-swiper">
        <div className="wrapper-swiper">
          <div className="swiper-title">
            What Our Clients Say
          </div>
          
        </div>
      </section>
    );
  }
}

export default Swip;
