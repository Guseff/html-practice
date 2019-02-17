import React, { Component } from 'react';

import './style.css';

class Labels extends Component {
  render() {   
    return (
      <ul className="label-list">        
        {this.props.data.map((data) => (
          <li>
            <div className="color-dot" style={{backgroundColor: data.color}}></div>
          </li>
        ))}                  
      </ul>
    );
  }
}

export default Labels;
