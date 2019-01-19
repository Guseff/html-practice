import React, { Component } from 'react';

import './style.css';

class Client extends Component {
  render() {
    const blockClass = "client-block--" + this.props.class;
    const photoClass = "client-photo--" + this.props.class;
    const nameClass = "client-name--" + this.props.class;
    const textClass = "client-text--" + this.props.class;
    return (
      <div className={blockClass}>
        <img src={this.props.src} alt='' className={photoClass} />
        <div className={nameClass}>
          {this.props.name}
        </div>
        <div className={textClass}>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Client;
