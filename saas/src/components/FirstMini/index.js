import React, { Component } from 'react';

import './style.css';

class FirstMini extends Component {
  render() {
    const blockClass = (this.props.active === true) ? 'first-mini--active' : 'first-mini';  
    return (
      <div className={blockClass}>
        <div className='first-mini-title'>
          Fusce vehicula dolor arcu
        </div>
        <span className='first-mini-text'>
          Vestibulum rutrum quam vitae<br/> fringilla tincidunt. Suspendisse nec tortor urna. 
        </span>
      </div>    
    );
  }
}

export default FirstMini;
