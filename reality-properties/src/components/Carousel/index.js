import React, { Component } from 'react';
import Slider from 'react-slick';

import Client from '../Client';

import '../../../node_modules/slick-carousel/slick/slick.css'; 
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import './style.css';

import photo1 from '../../assets/images/boy@2x.png';
import photo2 from '../../assets/images/girl-1@2x.png';
import photo3 from '../../assets/images/girl-2@2x.png';
import nextArrow from '../../assets/images/left-arrow.svg';
import prevArrow from '../../assets/images/right-arrow.svg';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "16px", height: "16px", backgroundImage: {nextArrow} }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 500,
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
              class={'normal'}
              src={photo1}
              name={name1}
              text={text}
            />
            <Client 
              class={'big'}
              src={photo2}
              name={name2}
              text={text}
            />
            <Client 
              class={'normal'}
              src={photo3}
              name={name3}
              text={text}
            />
          </Slider>
        </div>
      </section>
    );
  }
}

export default Carousel;
