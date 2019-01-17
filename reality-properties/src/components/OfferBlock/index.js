import React, { Component } from 'react';

import './style.css';

class OfferBlock extends Component {
  render() {
    return (
      <div className="offer-block">
        <div className="home-title gray">
          Villa With Pool For Sale
        </div>
        <div className="offer-price blue">
          $225,000
        </div>
        <div className="offer-address gray">
          263 S Rexford Dr, Beverly Hills, CA 90212
        </div>
        <div className="offer-option-box">
          <div className="offer-option-beds option">
            4 Beds
          </div>
          <div className="offer-option-bath option">
            2 Baths
          </div>
          <div className="offer-option-sqft option">
            980 SqFt
          </div>
        </div>
      </div>
    );
  }
}

export default OfferBlock;
