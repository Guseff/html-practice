import React, { Component } from 'react';

import './style.css';

class InfoDo extends Component {
  render() {
    return (
      <li>
        {/* eslint-disable-next-line */}
        <a href="#">
          <img alt='' src={this.props.data.img} />
          {this.props.data.text}
        </a>
      </li>
    );
  }
}

export default InfoDo;
