import React, { Component } from 'react';

import './style.css';

class Client extends Component {
  render() {
    return (
      <div className="client-block">
        <img src={this.props.src} alt='' className="client-photo" />
        <div className="client-name">
          {this.props.name}
        </div>
        <div className="client-text">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Client;
