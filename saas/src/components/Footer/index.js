import React from 'react';

import FooterList from '../FooterList';

import logo from '../../assets/images/logo.svg';
import fb from '../../assets/images/fb-ico.svg';
import tw from '../../assets/images/tw-ico.svg';
import yt from '../../assets/images/yt-ico.svg';
import FOOTER from './data.js';

import './style.css';

const Footer  = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-lists">
          {FOOTER.map(footer => (
            <FooterList
              title={footer.title}
              elems={footer.elems}
            />
          ))}
        </div>
        <div className="footer-social">
          <img alt="" src={logo} className="logo" />
          <div className="social-list">
            {/* eslint-disable-next-line */}
            <a href="#" className="social-href">
              <img alt="" src={fb} />
            </a>
            {/* eslint-disable-next-line */}
            <a href="#" className="social-href">
              <img alt="" src={tw} />
            </a>
            {/* eslint-disable-next-line */}
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
  )
}
    
export default Footer;
