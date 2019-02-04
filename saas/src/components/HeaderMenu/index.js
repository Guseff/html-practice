import React, { Component } from 'react';

import './style.css';

class HeaderMenu extends Component {
  render() {
    return (
      <nav className="header-menu">
        {/* eslint-disable */}
        <ul className="text">
          <li><a>Overview</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>About Us</a></li>
          <li><a>FAQ</a></li>
        </ul>
        {/* eslint-enable */}
      </nav>
    );
  }
}

export default HeaderMenu;