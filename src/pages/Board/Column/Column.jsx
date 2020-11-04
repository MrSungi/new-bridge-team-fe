import React from 'react';
import './Column.css';
import Item from '../Item';

export default function Column({ column, addItem }) {
  const handleAddItem = () => addItem('This is mocked item text', column.id);

  return (
    <div>
      <div className="column">
        <div className="column-header" id={column.id}>
          <h2>{column.name}</h2>
        </div>
        <div className="items">
          <h3>{column.note}</h3>
          <button type="button" onClick={handleAddItem}>
            +
          </button>
        </div>
      </div>
      {column.items.map(item => (
        <Item colorClass={column.id} text={item.text} key={item.itemId} />
      ))}
    </div>
  );
}
