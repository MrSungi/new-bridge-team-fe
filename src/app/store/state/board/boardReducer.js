import { ADD_ITEM } from './boardActionTypes';

const initialState = {
  boardId: 'boardId1',
  columns: [
    {
      id: 'first',
      name: 'Went well',
      note: 'happy',
      items: [],
    },
    {
      id: 'second',
      name: 'To improve',
      note: 'we-will-rock-you-in-the-future',
      items: [],
    },
    {
      id: 'third',
      name: 'Action items',
      note: 'queue-the-rocky-music',
      items: [],
    },
  ],
};

function handleAddItemToColumn(board, item) {
  const index = board.columns.findIndex(column => column.id === item.columnId);
  const column = board.columns[index];

  const changedColumn = {
    ...column,
    items: [...column.items, item],
  };

  const changedBoard = {
    ...board,
    columns: [...board.columns.slice(0, index), changedColumn, ...board.columns.slice(index + 1)],
  };

  return changedBoard;
}

const board = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return handleAddItemToColumn(state, action.payload);
    default: {
      return state;
    }
  }
};

export default board;
