import React, { Component } from 'react';

import BarButton from './bar-button.js';

import './style.css';

class SideBar extends Component {
  render() {
    const SIDEBAR_BTNS = [
      {
        img: require('../../assets/images/ico-grid.svg'),
        text: 'Dashboard',
        active: true,
      },{
        img: require('../../assets/images/ico-credit-card.svg'),
        text: 'Tickets',
        active: false,
      },{
        img: require('../../assets/images/ico-package.svg'),
        text: 'Inventory',
        active: false,
      },{
        img: require('../../assets/images/ico-user.svg'),
        text: 'Users',
        active: false,
      },
    ];
    return (
      <div className="sidebar">
        {SIDEBAR_BTNS.map((data) => (
          <BarButton
            data={data}
          />
        ))}
      </div>
    );
  }
}

export default SideBar;
