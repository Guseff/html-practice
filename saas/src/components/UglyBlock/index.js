import React, { Component } from 'react';

import ListBlock from '../ListBlock';

import './style.css';

import diag1 from '../../assets/images/bkg-2nd.png';
import diag2 from '../../assets/images/bkg-3rd.png';

class UglyBlock extends Component {
  render() {
    const right = this.props.right;
    let imgTop =  <img alt='' src={diag1} className='block-img' />;
    let imgBott = imgTop;

    if (right) {
      imgTop = <img alt='' src={diag2} className='block-img' />;
      imgBott = null;
    } else {
      imgTop = null;
      imgBott = <img alt='' src={diag1} className='block-img' />;
    }
    return (
      <div className="block-wrapper">
        {imgTop}
        <ListBlock
          listTitle={this.props.title}
          listDescr={this.props.descr}
        />
        {imgBott}
      </div>
    );
  }
}

export default UglyBlock;
