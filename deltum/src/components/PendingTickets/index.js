import React, { Component } from 'react';

import BtnInfo from '../InfoBlock/btnInfo.js';
import Client from './client.js';

import './style.css';

const CLIENTS = [
  {
    img: require('../../assets/images/anaru@2x.jpg'),
    name: 'Anaru Hakopa',
    time: '3 hrs ago',
    text: 'It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the…',
    more: true,
  },{
    img: require('../../assets/images/aneta@2x.jpg'),
    name: 'Aneta Škodová',
    time: '12 hrs ago',
    text: 'Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadget…',
    more: true,
  },{
    img: require('../../assets/images/anje@2x.jpg'),
    name: 'Anje Keizer',
    time: 'a day ago',
    text: 'Converter Ipod video taking portable video viewing to a whole new level with innovative features.',
    more: false,
  },{
    img: require('../../assets/images/katayama@2x.jpg'),
    name: 'Katayama Fumiki',
    time: '2 days ago',
    text: 'Hernia is an opening in the muscular structure of the wall of the abdomen. The weakness in the wall causes da…',
    more: true,
  },{
    img: require('../../assets/images/mkhuseli@2x.jpg'),
    name: 'Mkhuseli Malinga',
    time: '2 days ago',
    text: 'It was a humorously perilous business for both of us. For, before we proceed further, it must be said that the…',
    more: true,
  },
];

class PendingTickets extends Component {
  render() {
    return (
      <div>
        <div className="tickets">
          <BtnInfo text={'See All'} />
          <div className="tickets-title">
            Pending tickets
          </div>
          <div className="tickets-subscr">
            27 unresolved issues
          </div>
          {CLIENTS.map((data) => (
            <Client
              data={data}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PendingTickets;
