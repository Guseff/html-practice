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
        {/* eslint-disable */}
        <ul className="text">
          <li><a href="#">Homepage</a></li> 
          <li><a href="#">About Us</a></li> 
          <li><a href="#">For Rent</a></li> 
          <li><a href="#">For Sale</a></li> 
          <li><a href="#">Our Agents</a></li> 
          <li><a href="#">Contact Us</a></li> 
        </ul>
        <ul className="icon">
          <li><a href="#"><img alt="" src={compare} /></a></li>
          <li><a href="#"><img alt="" src={loved} /></a></li>
        </ul>
        {/* eslint-enable */}
      </nav>
    );
  }
}

export default HeaderMenu;