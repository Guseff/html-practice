import React, { Component } from 'react';

import BtnInfo from '../InfoBlock/BtnInfo';
import Bricks from './Bricks';
import Labels from './Labels';
import ItemTable from './ItemTable';

import './style.css';

const ITEMS = [
  {
    id: 'AB75231', 
    name: 'Dell Inspiron 15 7000 series',
    qty: '4',
    type: 'Laptop',
    time: '4 hours ago',
  },{
    id: 'HF54D25', 
    name: 'Dragon War ELE-G90R',
    qty: '2',
    type: 'Mouse',
    time: '18 hours ago',
  },{
    id: 'NB74272', 
    name: 'Acer Predator G9-792 i9',
    qty: '1',
    type: 'Keyboard',
    time: 'a day ago',
  },{
    id: 'GTUIY617', 
    name: 'Logitech G90 Optical',
    qty: '3',
    type: 'Mouse',
    time: 'a day ago',
  },{
    id: '09JHDSA', 
    name: 'FlashForge Creator Pro 2017',
    qty: '1',
    type: 'Printer',
    time: '2 days ago',
  },{
    id: '6752ASD', 
    name: 'Macbook pro 15’ 2018',
    qty: '5',
    type: 'Laptop',
    time: '3 days ago',
  },{
    id: 'JGSA564', 
    name: 'Apple MNE92HN/A',
    qty: '2',
    type: 'Desktop',
    time: '3 days ago',
  },{
    id: 'HAS7650', 
    name: 'Steelseries Rival 600',
    qty: '8',
    type: 'Mouse',
    time: 'a week ago',
  },
]; 

const COLORS = [
  {
    name: 'Laptops',
    qty: 326,
    color: '#4cd964',
  },{
    name: 'Mouse',
    qty: 581,
    color: '#007aff',
  },{
    name: 'Desktop',
    qty: 129,
    color: '#ff00c7',
  },{
    name: 'Keyboard',
    qty: 403,
    color: '#ffcc00',
  },{
    name: 'Printers',
    qty: 138,
    color: '#d141ef',
  },
];

class Items extends Component {
  render() {
    return (
      <div>
        <div className="items">
          <BtnInfo text={'Get summary'} />
          <div className="items-title">
            Total items in inventory
          </div>
          <div className="items-qty">
            1,508 <span>items</span>
          </div>
          <Bricks
            data={COLORS}
          />
          <div className="info-block--separator" />
          <Labels
            data={COLORS}
          />
          <div className="table-before">
            <div className="table-before--title">
              Recently added <span>(25 items)</span>
            </div>
            {/* eslint-disable-next-line */}
            <a href="#">View all recent items</a>
          </div>
          <ItemTable
            data={ITEMS}
          />
        </div>
      </div>
    );
  }
}

export default Items;
