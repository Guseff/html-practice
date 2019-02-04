import React, { Component } from 'react';

import './style.css';

class UserMenu extends Component {
  render() {
    return (
      <nav className="user-menu">
        {/* eslint-disable */}
        <ul>
          <li><a>Login</a></li>
          <li><a class="user-manu--button">Get Started</a></li>
        </ul>
        {/* eslint-enable */}
      </nav>
    );
  }
}

export default UserMenu;