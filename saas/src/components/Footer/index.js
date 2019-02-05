import React, { Component } from 'react';

import FooterList from '../FooterList';

import logo from '../../assets/images/logo.svg';
import fb from '../../assets/images/fb-ico.svg';
import tw from '../../assets/images/tw-ico.svg';
import yt from '../../assets/images/yt-ico.svg';
import './style.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-lists">
            <FooterList
              title='product'
              ref = {[
                '<a href="#">Features</a>', 
                '<a href="#">Use Cases</a>', 
                '<a href="#">Pricing</a>'
              ]}
            />
          </div>
          <div className="footer-social">
            <img alt="" src={logo} className="logo" />
            <div className="social-list">
              <a href="#" className="social-href">
                <img alt="" src={fb} />
              </a>
              <a href="#" className="social-href">
                <img alt="" src={tw} />
              </a>
              <a href="#" className="social-href">
                <img alt="" src={yt} />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright &copy; 2018, ElitePIxels Inc. Designed for Project365.design
        </div>
      </footer>
    );
  }
}

export default Footer;
