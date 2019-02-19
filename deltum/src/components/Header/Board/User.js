import React from 'react';

import './style.css';

const User = ({user}) => {  
  return (
    <div className="user">
      {user.name}
      <div className="user-pic">
        {user.initials}
      </div>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */}
      <a href='#' className='user-ref'></a>
    </div>
  );
}

export default User;