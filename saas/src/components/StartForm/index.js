import React, { Component } from 'react';
import classNames from 'classnames';

import './style.css';

class StartForm extends Component {
  render() {
    const placeholder = 'Enter your e-mail ID';
    const inpClass = classNames("start-input", "start-input--" + this.props.fmode); 
    const btnClass = classNames("start-button", "start-button--" + this.props.fmode); 

    return (
      <form className="start-form">
        <input className={inpClass} type="text" placeholder={placeholder} />
        <button className={btnClass}>
          Start for free
        </button>
      </form>
    );
  }
}

export default StartForm;
