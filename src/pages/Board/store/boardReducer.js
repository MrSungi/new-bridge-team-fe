import { ADD_ITEM, UPVOTE_ITEM } from './boardActionTypes';

const initialState = {
  boardId: 'boardId1',
  columns: [
    {
      id: 'first',
      name: 'Went well',
      note: 'happy',
      items: [],
      isVotable: true,
    },
    {
      id: 'second',
      name: 'To improve',
      note: 'we-will-rock-you-in-the-future',
      items: [],
      isVotable: true,
    },
    {
      id: 'third',
      name: 'Action items',
      note: 'queue-the-rocky-music',
      items: [],
      isVotable: false,
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

const handleUpvote = (board, { columnId, itemId }) => {
  const columnIndex = board.columns.findIndex(column => column.id === columnId);
  const column = board.columns[columnIndex];

  const itemIndex = column.items.findIndex(item => item.itemId === itemId);
  const item = column.items[itemIndex];

  const changedItem = {
    ...item,
    voteCount: item.voteCount + 1,
  };

  const changedColumn = {
    ...column,
    items: [...column.items.slice(0, itemIndex), changedItem, ...column.items.slice(itemIndex + 1)],
  };

  const changedBoard = {
    ...board,
    columns: [
      ...board.columns.slice(0, columnIndex),
      changedColumn,
      ...board.columns.slice(columnIndex + 1),
    ],
  };

  return changedBoard;
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return handleAddItemToColumn(state, action.payload);
    case UPVOTE_ITEM:
      return handleUpvote(state, action.payload);
    default: {
      return state;
    }
  }
};

export default board;
