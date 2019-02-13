import React, { Component } from 'react';

import './style.css';

class BarButton extends Component {
  render() {
    const img = (this.props.data.img) ? this.props.data.img : null;
    const text = (this.props.data.text) ? this.props.data.text : null;
    const cn = (this.props.data.active) ? 'sidebar-button sidebar-button--active' : 'sidebar-button';
    return (
      <button className="sidebar-button">
        <img alt='' src={img} />
        {text}
      </button>
    );
  }
}

export default BarButton;
