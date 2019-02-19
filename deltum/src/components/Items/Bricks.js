import React, { Component } from 'react';

import './style.css';

const aList = [
  {
    img: require('../../assets/images/ico-plus.svg'),
    text: 'Create label',
  },{
    img: require('../../assets/images/ico-chevron-down.svg'),
    text: 'Hide labels',
  } 
];

class Bricks extends Component {
  getDerivedStateFromProps() {

  }
  
  render() {
    const sum = this.props.data.reduce(
      (
        (acc, curr) => acc + curr.qty
      ), 0
    );

    const brStyle = this.props.data.map((data) => (
      {
        width: data.qty*250/sum +'px',
        backgroundColor: data.color,
      }
    ));
      
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
              {/* eslint-disable-next-line */}
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
