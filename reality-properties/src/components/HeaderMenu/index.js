import React, { Component } from 'react';

import logo from '../../assets/images/logo@2x.png';
import compare from '../../assets/images/compare.svg';
import loved from '../../assets/images/loved.svg';

import './style.css';

class HeaderMenu extends Component {
  render() {
    return (
      <nav className="header-menu">
        <img alt="" src={logo} className="logo" />
        <ul className="text">
          <li><a href="#">Homepage</a></li> {/* eslint-disable-line */}
          <li><a href="#">About Us</a></li> {/* eslint-disable-line */}
          <li><a href="#">For Rent</a></li> {/* eslint-disable-line */}
          <li><a href="#">For Sale</a></li> {/* eslint-disable-line */}
          <li><a href="#">Our Agents</a></li> {/* eslint-disable-line */}
          <li><a href="#">Contact Us</a></li> {/* eslint-disable-line */}
        </ul>
        <ul className="icon">
          {/* eslint-disable-next-line */}
          <li><a href="#"><img alt="" src={compare} /></a></li>
          {/* eslint-disable-next-line */}
          <li><a href="#"><img alt="" src={loved} /></a></li>
        </ul>
      </nav>
    );
  }
}

export default HeaderMenu;