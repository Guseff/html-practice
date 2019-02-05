import React, { Component } from 'react';

import './style.css';

class FooterList extends Component {
  render() {
    return (
      <div className="footer-list">
        <div className="footer-list--title">
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default FooterList;
