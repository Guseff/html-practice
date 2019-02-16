import React, { Component } from 'react';

import './style.css';

class btnInfo extends Component {
  render() {
    return (
      <button className="btn-info">
        {this.props.text}
      </button>
    );
  }
}

export default btnInfo;
