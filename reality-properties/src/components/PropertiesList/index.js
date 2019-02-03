import React, { Component } from 'react';

import PropertyBlock from '../PropertyBlock';

import './style.css';

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
        </div>
        <div className="btn-wrapper">
          <button className="btn-big-blue white">
            All Properties
          </button>
        </div>
      </section>
    );
  }
}

export default PropertiesList;
