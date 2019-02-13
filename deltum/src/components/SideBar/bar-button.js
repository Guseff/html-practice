import React, { Component } from 'react';

import './style.css';

class BarButton extends Component {
  render() {
    const img = (this.props.data.img) ? this.props.data.img : null;
    const text = (this.props.data.text) ? this.props.data.text : null;
    const cn = (this.props.data.active) ? 'sidebar-button sidebar-button--active' : 'sidebar-button';
    const act = (active) => {
      if (active) {
        return (
          <div>
            <div className="act"></div>
            <div className="act-gradient"></div>
          </div>
        )
      } else {
        return null;
      }
    }
    
    return (
      <div>
        {act(this.props.data.active)}
        <button className={cn}>
          <img alt='' src={img} />
          {text}
        </button>
      </div>
    );
  }
}

export default BarButton;
