import React, { Component } from 'react';

import BarButton from './bar-button.js';
import RefList from './ref-list.js';

import './style.css';

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
const SETTINGS_BTN = {
  img: require('../../assets/images/ico-settings.svg'),
  text: 'Settings',
  set: true,
};
const REF_LIST = [
  {
    ref: '#',
    text: 'Feedback',
  },{
    ref: '#',
    text: 'Business principles',
  },{
    ref: '#',
    text: 'Suggestions',
  },
];


class SideBar extends Component {
  render() {  
    return (
      <div className="sidebar">
        {SIDEBAR_BTNS.map((data) => (
          <BarButton data={data} />
        ))}
        <div className="separator-blue"></div>
        <BarButton data={SETTINGS_BTN} />
        <div className="separator-gray"></div>
        <RefList data={REF_LIST} />
      </div>
    );
  }
}

export default SideBar;
