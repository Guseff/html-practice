import React, { Component } from 'react';

import './style.css';

class FinalMini extends Component {
  render() {
    return (
      <div className="final-mini">
        <img alt="" src={this.props.img} className="final-mini--img" />
        <div className="final-mini--title">
          {this.props.title}
        </div>
        <div className="final-mini--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque.
        </div>
      </div>
    );
  }
}

export default FinalMini;