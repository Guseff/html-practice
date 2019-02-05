import React, { Component } from 'react';

import StartForm from '../StartForm';

import './style.css';

class StartWhite extends Component {
  render() {
    return (
      <div className="start-white">
        <h1>Finally, something that works!</h1>
        <div className="start-white-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut pretium pretium tempor. Ut eget imperdiet neque. 
          In volutpat ante semper diam molestie, et aliquam erat laoreet. 
        </div>
        <StartForm fmode={'light'} />
      </div>
    );
  }
}

export default StartWhite;
