import React, { Component } from 'react';

import './style.css';

class UserMenu extends Component {
  render() {
    return (
      <nav className="user-menu">
        <ul>
          <li><a>Login</a></li>
          <li><a class="user-manu--button">Get Started</a></li>
        </ul>
      </nav>
    );
  }
}

export default UserMenu;