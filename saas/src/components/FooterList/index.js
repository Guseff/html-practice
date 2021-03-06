import React, { Component } from 'react';

import './style.css';

class FooterList extends Component {
  render() {
    const refList = this.props.elems.map((data) => {
      return (
        <li>
          <a href={data.href}>{data.label}</a>
        </li>
      );
    });
    return (
      <div className="footer-list">
        <div className="footer-list--title">
          {this.props.title}
        </div>
        {refList}
      </div>
    );
  }
}

export default FooterList;
