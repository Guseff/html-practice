import React, { Component } from 'react';

import './style.css';

class ContactBlock extends Component {
  render() {
    return (
      <div className="contact-block">
        <div className="contact-title white">
          Want to Sell Property?
        </div>
        <p className="contact-subscribe white">
          Let us create a tailored strategic marketing<br/> plan and keep track of the selling process.
        </p>
        <button className="btn-big-green white">
          Contact Us
        </button>
      </div>
    );
  }
}

export default ContactBlock;
