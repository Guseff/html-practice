import React, { Component } from 'react';

import './style.css';

class HeaderSearchSelect extends Component {
  render() {
    return (
      <div className="custom-select">
        <select>
          <option value="0">For Rent</option>
          <option value="1">For Sale</option>
        </select>
      </div>

      
    );
  }
}

export default HeaderSearchSelect;