import React from 'react';
import { Grid } from '@material-ui/core';
import Column from '../Column';

export default function Columns({ columns }) {
  return (
    <Grid container direction="row">
      {columns.map(column => (
        <Grid container direction="row" xs={4}>
          <Column column={column} key={column.id} />
        </Grid>
      ))}
    </Grid>
  );
}
