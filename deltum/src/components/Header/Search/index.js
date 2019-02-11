import React, { Component } from 'react';

import './style.css';

const p_holder = 'Search inventory, users…';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input type='text' className='search-input' placeholder={p_holder} />
        <button className='search-submit' value=''></button>
      </div>
    );
  }
}

export default Search;
