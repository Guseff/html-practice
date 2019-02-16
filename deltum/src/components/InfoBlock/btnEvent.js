import React, { Component } from 'react';

import './style.css';

class btnEvent extends Component {
  render() {
    return (
      <button className="btn-event">
        {this.props.text}
      </button>
    );
  }
}

export default btnEvent;
