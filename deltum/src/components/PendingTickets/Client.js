import React, { Component } from 'react';

import './style.css';

class Client extends Component {
  render() {
    const data = this.props.data;

    return (
      <div className="client">
        <img alt='' src={data.img} />
        <div className="client-wrap">
          <div className="client-title">
            <div className="client-name">
              {data.name}
            </div>
            <div className="client-time">
              {data.time}
            </div>
          </div>
          <div className="client-text">
            {data.text}
            {/* eslint-disable-next-line */}
            {data.more && <a href="#">...more</a>}
          </div>
        </div>
      </div>
    );
  }
}

export default Client;
