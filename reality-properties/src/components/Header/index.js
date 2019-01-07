import React, { Component } from 'react';
import HeaderMenu from '../HeaderMenu';
import '../../App.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <HeaderMenu />
      </header>
    );
  }
}

export default Header;
