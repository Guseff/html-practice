import React, { Component } from 'react';

import './style.css';

class RefList extends Component {
  render() {
    const ref = (data) => {
      return (
        <li>
          <a href={data.ref}>{data.text}</a>
        </li>
      );
    }
    
    return (
      <div className="sidebar-reflist">
        <ul>
          {this.props.data.map((data) => 
            ref(data)
          )}
        </ul>
      </div>
    );
  }
}

export default RefList;
