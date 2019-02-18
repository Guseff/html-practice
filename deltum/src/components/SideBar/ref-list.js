import React, { Component } from 'react';

import './style.css';

class RefList extends Component {
  render() {
    return (
      <div className="sidebar-reflist">
        <ul>
          {this.props.data.map((data) => (
            <li>
              <a href={data.ref}>{data.text}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RefList;
