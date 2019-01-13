import React, { Component } from 'react';

import logo from '../../assets/images/logo@2x.png';
import compare from '../../assets/images/compare.svg';
import loved from '../../assets/images/loved.svg';

import './style.css';

class HeaderMenu extends Component {
  render() {
    return (
      <nav className="header-menu">
        <img src={logo} className="logo" />
        <ul className="text">
          <li><a>Homepage</a></li>
          <li><a>About Us</a></li>
          <li><a>For Rent</a></li>
          <li><a>For Sale</a></li>
          <li><a>Our Agents</a></li>
          <li><a>Contact Us</a></li>
        </ul>
        <ul className="icon">
          <li><a><img src={compare} /></a></li>
          <li><a><img src={loved} /></a></li>
        </ul>
      </nav>
    );
  }
}

export default HeaderMenu;