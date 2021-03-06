import React, { Component } from 'react';

import OfferBlock from '../OfferBlock';
import CrewBlock from '../CrewBlock';

import './style.css';

class HotOffer extends Component {
  render() {
    return (
      <section className="section-hot-offer">
        <div className="wrapper-offer">
          <OfferBlock />
          <CrewBlock />
        </div>
      </section>
    );
  }
}

export default HotOffer;
