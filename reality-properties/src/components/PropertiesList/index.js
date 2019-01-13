import React, { Component } from 'react';

import PropBlock from '../PropertyBlock';

import './style.css';
import PropertyBlock from '../PropertyBlock';

class PropertiesList extends Component {
  render() {
    return (
      <section className="section">
        <h2 className="title-section black">
            Featured Properties
        </h2>
        <div className="wrapper">
          <PropertyBlock />
          <PropertyBlock />
          <PropertyBlock />
          <PropertyBlock />
          <PropertyBlock />
          <PropertyBlock />
        </div>
      </section>
    );
  }
}

export default PropertiesList;
