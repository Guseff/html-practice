import React, { Component } from 'react';

import BarButton from './bar-button.js';

import './style.css';

class SideBar extends Component {
  render() {
    const data = {
      img: require('../../assets/images/ico-grid.svg'),
      text: 'Dashboard',
    };
    return (
      <div className="sidebar">
        <BarButton
          data={data}
        />
      </div>
    );
  }
}

export default SideBar;
