import React, { Component } from 'react';

import './style.css';

class Labels extends Component {
  render() {   
    return (
      <ul className="label-list">        
        {this.props.data.map((data) => (
          <li>
            <div className="color-dot" style={{backgroundColor: data.color}}></div>
            <div className="label-item">
              <div className="label-item--name">
                {data.name}
              </div>
              <div className="label-item--qty">
                {data.qty}
            </div>
            </div>
          </li>
        ))}                  
      </ul>
    );
  }
}

export default Labels;
