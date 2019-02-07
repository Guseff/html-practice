import React, { Component } from 'react';

import './style.css';

class FooterList extends Component {

  

  render() {
    const list = [
      'Features', 
      'Use Cases', 
      'Pricing'
    ];
    const reactElementsArray = list.map((data) => {
      return (
        <li><a href="#">{data}</a></li>
      );
    });
    return (
      <div className="footer-list">
        <div className="footer-list--title">
          {this.props.title}
          {reactElementsArray}
        </div>
      </div>
    );
  }
}

export default FooterList;
