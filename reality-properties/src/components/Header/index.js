import React, { Component } from 'react';

import HeaderMenu from '../HeaderMenu';
import HeaderSearch from '../HeaderSearch';

import '../../App.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <HeaderMenu />
        <h1 className="Main-Header">
          Let us Guide You Home
        </h1>
        <h3 className="Sub-Header">
          Find the house of your dreams.
        </h3>
        <HeaderSearch />
      </header>
    );
  }
}

export default Header;
