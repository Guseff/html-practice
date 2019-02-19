import React, { Component } from 'react';

import './style.css';

class ItemTable extends Component {
  render() {   
    return (
      <table>
        <tr className="table-title-str">
          <th>Item ID</th>
          <th>Name</th>
          <th>Qty.</th>
          <th>Type</th>
          <th>Time</th>
        </tr>
        {this.props.data.map((data) => (
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.qty}</td>
            <td>{data.type}</td>
            <td>{data.time}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default ItemTable;
