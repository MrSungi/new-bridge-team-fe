import { v4 as uuid } from 'uuid';
import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from './boardActionTypes';

export const addItem = (text, columnId) => ({
  type: ADD_ITEM,
  payload: {
    columnId,
    itemId: uuid(),
    text,
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
