const initialState = [
  {
    id: 'first',
    name: 'Went well',
    note: 'happy',
  },
  {
    id: 'second',
    name: 'To improve',
    note: 'we-will-rock-you-in-the-future',
  },
  {
    id: 'third',
    name: 'Action items',
    note: 'queue-the-rocky-music',
  },
];

const board = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default board;
