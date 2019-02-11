import React from 'react';

import './style.css';

const BoardRef = ({data}) => {
  const dot = (data.new) ? <div className="green-dot"></div> : null;
  
  return (
    <li>
      <a href={data.href} className='board-ref'>
        <img alt='' src={data.img} />{data.text}
        {dot}
      </a>
    </li>
  );
}

export default BoardRef;