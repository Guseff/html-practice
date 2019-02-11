import React, { Component } from 'react';

import Logo from './logo.js';
import Container from '../Container';
import Search from './Search';
import Board from './Board';

import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Logo />
        <Container>
          <Search />
          <Board />
        </Container>
      </div>
    );
  }
}

export default Header;
