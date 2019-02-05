import React, { Component } from 'react';

import './style.css';

class ListBlock extends Component {
  render() {
    return (
      <div className="list-wrapper">
        <h3>{this.props.listTitle}</h3>
        <div className="list-descr">
          {this.props.listDescr}
        </div>
        <ul className="list-body">
          <li>Lorem ipsum dolor</li>
          <li>consectetur adipiscing</li>
          <li>pretium pretium</li>
          <li>eget imperdiet neque</li>
        </ul>
        {/* eslint-disable-next-line */}
        <a href="#" className="list-more">View all features<span>&nbsp;&rarr;</span></a>
      </div>
    );
  }
}

export default ListBlock;
