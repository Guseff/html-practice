import React, { Component } from 'react';

import HeaderMenu from '../HeaderMenu';
import UserMenu from '../UserMenu';

import logo from '../../assets/images/logo.svg';
import './style.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img alt="" src={logo} className="logo" />
        <HeaderMenu />
        <UserMenu />
      </header>
    );
  }
}

export default Header;
