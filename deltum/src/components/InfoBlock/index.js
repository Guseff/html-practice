import React, { Component } from 'react';

import './style.css';

class InfoBlock extends Component {
  render() {
    return (
      <div className="info-block">
        {this.props.children}
      </div>
    );
  }
}

export default InfoBlock;
