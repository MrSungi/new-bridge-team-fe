import React from 'react';
import Column from '../Column';
import './Columns.css';

export default function Columns({ board }) {
  return (
    <div className="columns">
      {board.map(column => (
        <Column column={column} key={column.id} />
      ))}
    </div>
  );
}
