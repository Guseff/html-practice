import React, { Component } from 'react';

import './style.css';

class LeftCol extends Component {
  render() {
    return (
      <div className="colomn-left">
        {this.props.children}
      </div>
    );
  }
}

export default LeftCol;
