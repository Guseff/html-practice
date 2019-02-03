import React, { Component } from 'react';
import Slider from 'react-slick';

import Client from '../Client';

import '../../../node_modules/slick-carousel/slick/slick.css'; 
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import './style.css';

import photo1 from '../../assets/images/boy@2x.png';
import photo2 from '../../assets/images/girl-1@2x.png';
import photo3 from '../../assets/images/girl-2@2x.png';

class Carousel extends Component {
  render() {
    const settings = {
      className: "carousel-wrapper",
      speed: 500,
      centerMode: true,
      centerPadding: "0px",
      centerMargin: "50px",
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
    };
    const text = 'Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself. Like buying a new car before you actually got that new job. Well, when setting and obtaining your goals, you need to What you profess, you possess!';
    const name1 = 'Oluchi Mazi';
    const name2 = 'Bansilal Brata';
    const name3 = 'Fariba Mirzaii';

    return (
      <section className="section-carousel">
        <div className="wrapper-carousel">
          <div className="carousel-title">
            What Our Clients Say
          </div>
          <Slider {...settings}>
            <Client
              src={photo1}
              name={name1}
              text={text.substring(0, 285)}
            />
            <Client
              src={photo2}
              name={name2}
            />
            <Client
              src={photo3}
              name={name3}
            />
            <Client
              src={photo1}
              name={name1}
            />
            <Client
              src={photo2}
              name={name2}
            />
          </Slider>
        </div>
      </section>
    );
  }
}

export default Carousel;
