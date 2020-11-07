import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import './Item.css';

const Item = ({ text, colorClass }) => (
  <Grid item className="item-container" xs={12}>
    <div className={colorClass}>
      <p className="item-text">{text}</p>
      <Grid item container direction="row-reverse">
        <IconButton className="icon-button" aria-label="upvote">
          <ThumbUpIcon />
        </IconButton>
        <IconButton className="icon-button" aria-label="comment">
          <CommentIcon />
        </IconButton>
      </Grid>
    </div>
  </Grid>
);

export default Item;
