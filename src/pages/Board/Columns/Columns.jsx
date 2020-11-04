import React from 'react';
import Column from '../Column';
import './Columns.css';

export default function Columns({ columns }) {
  return (
    <div className="columns">
      {columns.map(column => (
        <Column column={column} key={column.id} />
      ))}
    </div>
  );
}
