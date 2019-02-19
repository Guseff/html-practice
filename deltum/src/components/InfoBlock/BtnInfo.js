import React, { Component } from 'react';

import './style.css';

class BtnInfo extends Component {
  render() {
    return (
      <button className="btn-info">
        {this.props.text}
      </button>
    );
  }
}

export default BtnInfo;
