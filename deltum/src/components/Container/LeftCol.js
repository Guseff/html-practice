import React from 'react';

import './style.css';

const LeftCol = (props) => (
  <div className="colomn-left">
    {props.children}
  </div>
);

export default LeftCol;
