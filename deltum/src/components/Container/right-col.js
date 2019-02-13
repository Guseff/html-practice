import React, { Component } from 'react';

import './style.css';

class RightCol extends Component {
  render() {
    return (
      <div className="colomn-right">
        {this.props.children}
      </div>
    );
  }
}

export default RightCol;
