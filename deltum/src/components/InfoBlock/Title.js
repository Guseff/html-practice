import React, { Component } from 'react';

import './style.css';

class InfoTitle extends Component {
  render() {
    return (
      <div>
        <div className="info-title">
          {this.props.title}
        </div>
        <div className="info-subscr">
          {this.props.subscr}
        </div>
      </div>
    );
  }
}

export default InfoTitle;
