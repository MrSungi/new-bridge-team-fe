import { v4 as uuid } from 'uuid';
import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, UPVOTE_ITEM_INIT } from './boardActionTypes';

export const addItem = (text, columnId) => ({
  type: ADD_ITEM,
  payload: {
    columnId,
    itemId: uuid(),
    text,
    voteCount: 0,
  },
});

export const upVote = (columnId, itemId) => ({
  type: UPVOTE_ITEM_INIT,
  payload: {
    columnId,
    itemId,
  },
});

// TODO
export const editItem = () => ({
  type: EDIT_ITEM,
});

// TODO
export const deleteItem = () => ({
  type: DELETE_ITEM,
});
