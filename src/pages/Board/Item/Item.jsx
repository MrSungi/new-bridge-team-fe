import React from 'react';
import './Item.css';

const Item = ({ text, colorClass }) => (
  <div className="item-container">
    <div className={colorClass}>
      <p className="item-text">{text}</p>
    </div>
  </div>
);

export default Item;
