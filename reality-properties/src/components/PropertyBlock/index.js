import React, { Component } from 'react';

import pic from '../../assets/images/pics/home-pic@2x.png';

import './style.css';

class PropertyBlock extends Component {
  render() {
    return (
      <div className="prop-block">
        <img alt="" src={pic} className="home-pic" />
        <div className="home-title gray">
          Villa With Pool For Sale
        </div>
        <div className="home-price blue">
          $225,000
        </div>
        <div className="home-address gray">
          263 S Rexford Dr, Beverly Hills, CA 90212
        </div>
        <div className="home-option-box">
          <div className="option beds">
            4 Beds
          </div>
          <div className="option bath">
            2 Baths
          </div>
          <div className="option sqft">
            980 SqFt
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyBlock;
