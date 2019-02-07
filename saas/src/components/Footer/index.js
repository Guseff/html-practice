import React, { Component } from 'react';

import FooterList from '../FooterList';

import logo from '../../assets/images/logo.svg';
import fb from '../../assets/images/fb-ico.svg';
import tw from '../../assets/images/tw-ico.svg';
import yt from '../../assets/images/yt-ico.svg';
import './style.css';

class Footer extends Component {
  render() {
    const list = [
      '<a href="#">Features</a>', 
      '<a href="#">Use Cases</a>', 
      '<a href="#">Pricing</a>'
    ];
    return (
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-lists">
            <FooterList
              title='product'
              elems={[
                ['#1','Features'],
                ['#2','Use Cases'],
                ['#3','Pricing']
              ]}
            />
            <FooterList
              title='Use Cases'
              elems={[
                ['#1','ITES'],
                ['#2','Consultancies'],
                ['#3','Services Sector']
              ]}
            />
            <FooterList
              title='support'
              elems={[
                ['#1','Blog'],
                ['#2','FAQ'],
                ['#3','Support']
              ]}
            />
            <FooterList
              title='company'
              elems={[
                ['#1','About'],
                ['#2','Privacy Policy'],
                ['#3','Terms of Service']
              ]}
            />
            <FooterList
              title='features 1'
              elems={[
                ['#1','Link #1'],
                ['#2','Link #2'],
                ['#3','Link #3']
              ]}
            /><FooterList
            title='features 2'
            elems={[
              ['#1','Link #1'],
              ['#2','Link #2'],
              ['#3','Link #3']
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
