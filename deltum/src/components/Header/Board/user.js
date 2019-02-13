import React from 'react';

import './style.css';

const User = ({user}) => {  
  return (
    <div className="user">
      {user.name}
      <div className="user-pic">
        {user.initials}
      </div>
      {/* eslint-disable-next-line */}
      <a href='#' className='user-ref'></a>
    </div>
  );
}

export default User;