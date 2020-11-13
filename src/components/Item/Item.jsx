import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import './Item.css';

const Item = ({ text, colorClass, isVotable, voteCount, upVote, columnId, itemId }) => (
  <Grid item className="item-container" xs={12}>
    <div className={colorClass}>
      <p className="item-text">{text}</p>
      <Grid item container direction="row-reverse">
        {isVotable && (
          <IconButton
            className="icon-button"
            onClick={() => upVote(columnId, itemId)}
            aria-label="upvote"
          >
            <ThumbUpIcon />
            <div>{voteCount}</div>
          </IconButton>
        )}
        <IconButton className="icon-button" aria-label="comment">
          <CommentIcon />
        </IconButton>
      </Grid>
    </div>
  </Grid>
);

export default Item;
