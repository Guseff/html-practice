import React, { Component } from 'react';

import HeaderMenu from '../HeaderMenu';
import HeaderSearch from '../HeaderSearch';

import './style.css';

class Header extends Component {
  render() {
    return (
      <header className="app-header section">
        <HeaderMenu />
        <h1 className="title">
          Let us Guide You Home
        </h1>
        <h3 className="description">
          Find the house of your dreams.
        </h3>
        <HeaderSearch />
      </header>
    );
  }
}

export default Header;
