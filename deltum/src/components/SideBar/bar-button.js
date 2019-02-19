import React, { Component } from 'react';
import classNames from 'classnames';

import './style.css';

class BarButton extends Component {
  classNameForButton(data) {
    if (data.set) {
      return (classNames('sidebar-button', 'sidebar-button--gray'));
    } else if (data.active) {
      return (classNames('sidebar-button', 'sidebar-button--active'));
    } else {
      return ('sidebar-button');
    }
  }
  
  render() {
    return (
      <div>
        {this.props.data.active && (
          <div>
            <div className="act"></div>
            <div className="act-gradient"></div>
          </div>
        )}
        <button className={this.classNameForButton(this.props.data)}>
          <img alt='' src={this.props.data.img} />
          {this.props.data.text}
        </button>
      </div>
    );
  }
}

export default BarButton;
