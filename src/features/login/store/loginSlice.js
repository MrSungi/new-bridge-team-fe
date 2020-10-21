/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isUserAuthenticating: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    authenticateUser: state => {
      state.currentUser = null;
      state.isUserAuthenticating = true;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isUserAuthenticating = false;
    },
    authenticateUserError: state => {
      state.isUserAuthenticating = false;
    },
  },
});

export const { authenticateUser, setCurrentUser, authenticateUserError } = loginSlice.actions;

export default loginSlice.reducer;
