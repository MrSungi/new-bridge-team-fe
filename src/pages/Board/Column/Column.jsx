import React from 'react';
import './Column.css';

export default function Column({ column }) {
  return (
    <div className="column">
      <div className="column-header" id={column.id}>
        <h2>{column.name}</h2>
      </div>
      <div className="items">
        <h3>{column.note}</h3>
        <button type="button">+</button>
      </div>
    </div>
  );
}
