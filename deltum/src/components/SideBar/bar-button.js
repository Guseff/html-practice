import React, { Component } from 'react';

import './style.css';

class BarButton extends Component {
  render() {
    const img = (this.props.data.img) ? this.props.data.img : null;
    const text = (this.props.data.text) ? this.props.data.text : null;
    const cn = (data) => {
      if (data.set) {
        return ('sidebar-button sidebar-button--gray');
      } else if (data.active) {
        return ('sidebar-button sidebar-button--active');
      } else {
        return ('sidebar-button');
      }
    }
    const act = (data) => {
      if (data.active) {
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
        {act(this.props.data)}
        <button className={cn(this.props.data)}>
          <img alt='' src={img} />
          {text}
        </button>
      </div>
    );
  }
}

export default BarButton;
