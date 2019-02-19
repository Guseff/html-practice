import React, { Component } from 'react';
import classNames from 'classnames';

import './style.css';

class BarButton extends Component {
  render() {
    const buttonClassName = classNames('sidebar-button', {
      'sidebar-button--gray': this.props.data.set,
      'sidebar-button--active': this.props.data.active
    });
    
    return (
      <div>
        {this.props.data.active && (
          <div>
            <div className="act"></div>
            <div className="act-gradient"></div>
          </div>
        )}
        <button className={buttonClassName}>
          <img alt='' src={this.props.data.img} />
          {this.props.data.text}
        </button>
      </div>
    );
  }
}

export default BarButton;
