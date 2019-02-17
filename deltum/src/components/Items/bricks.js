import React, { Component } from 'react';

import './style.css';

class Bricks extends Component {
  render() {
    let sum = 0;

    this.props.data.map((data) => 
      sum += data.qty
    );

    const brStyle = this.props.data.map((data) => (
      {
        width: data.qty*250/sum +'px',
        backgroundColor: data.color,
      }
    ));
      
    return (
      <ul className="brick-list">        
        {brStyle.map((data) => (
          <li>
            <div className="brick-item" style={data}></div>
          </li>
        ))}                  
      </ul>
    );
  }
}

export default Bricks;
