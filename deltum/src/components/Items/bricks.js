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

    const aList = [
      {
        img: require('../../assets/images/ico-plus.svg'),
        text: 'Create label',
      },{
        img: require('../../assets/images/ico-chevron-down.svg'),
        text: 'Hide labels',
      } 
    ];
      
    return (
      <div className="color-trend">
        <ul className="brick-list">        
          {brStyle.map((data) => (
            <li>
              <div className="brick-item" style={data}></div>
            </li>
          ))}                  
        </ul>
        <ul className="brick-a-list">
          {aList.map((data) => (
            <li>
              <img alt='' src={data.img} />
              <a href="#">
                {data.text}
              </a>
            </li>     
           ))}       
        </ul>
      </div>
    );
  }
}

export default Bricks;
