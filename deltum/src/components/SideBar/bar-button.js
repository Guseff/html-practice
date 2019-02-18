import React, { Component } from 'react';
import classNames from 'classnames';

import './style.css';

class BarButton extends Component {
  img = (this.props.data.img) ? this.props.data.img : null;
  text = (this.props.data.text) ? this.props.data.text : null;
   
  cn(data) {
    if (data.set) {
      return (classNames('sidebar-button', 'sidebar-button--gray'));
    } else if (data.active) {
      return (classNames('sidebar-button', 'sidebar-button--active'));
    } else {
      return ('sidebar-button');
    }
  }
  act(data) {
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
   
  render() {
    return (
      <div>
        {this.act(this.props.data)}
        <button className={this.cn(this.props.data)}>
          <img alt='' src={this.img} />
          {this.text}
        </button>
      </div>
    );
  }
}

export default BarButton;
