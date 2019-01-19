import React, { Component } from 'react';

import footer_logo from '../../assets/images/logo-blue@2x.png';

import './style.css';

class Footer extends Component {
  render() {
    return (
      <footer className="section-footer">
        <div className="section-footer--logo">
          <img alt='' src={footer_logo} className="section-footer--logo" />
        </div>
        <div className="section-footer--text">
          Have you ever heard the expression, 
          “Do not count your chickens before they hatch?” 
          Maybe an older, wiser individual would tell you this 
          to keep you from getting ahead of yourself.
        </div>
      </footer>
    );
  }
}

export default Footer;
