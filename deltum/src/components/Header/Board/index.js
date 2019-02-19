import React, { Component } from 'react';

import BoardRef from './BoardRef';
import User from './User';

import './style.css';

const DATA = [
  {
    ref: "#0",
    new: true,
    img: require('../../../assets/images/ico-message.svg'),
  },{
    ref: "#1",
    new: true,
    img: require('../../../assets/images/ico-bell.svg'),
  },{
    ref: "#1",
    img: require('../../../assets/images/ico-help.svg'),
    text: 'Help',
  },
];

const USER = {
  name: 'Micheal Tucker',
  initials: 'MT',
};

class Board extends Component {
  render() {
    return (
      <div className="board">
        <ul>
        {DATA.map((data) =>(
            <BoardRef data={data} />
        ))}
        </ul>
        <User user={USER} />
      </div>
    );
  }
}

export default Board;
