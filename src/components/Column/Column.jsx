import React from 'react';
import { Grid, Button } from '@material-ui/core';
import './Column.css';
import Item from '../Item';

export default function Column({ column, addItem }) {
  const handleAddItem = () => addItem('This is mocked item text', column.id);

  return (
    <div>
      <Grid className="column" spacing={1}>
        <div className="column-header" id={column.id}>
          <h2>{column.name}</h2>
          <Button variant="contained" onClick={handleAddItem} fullWidth="true">
            +
          </Button>
        </div>
        <Grid className="items">
          {column.items.map(item => (
            <Item
              colorClass={column.id}
              text={item.text}
              voteCount={item.voteCount}
              isVotable={column.isVotable}
              columnId={column.id}
              itemId={item.itemId}
              key={item.itemId}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
