import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import login from '../../pages/Login/store/loginSlice';
import loginOld from '../../pages/LoginOld/store/loginSlice';
import sagas from './sagas';
import board from './state/board/boardReducer';

const reducer = combineReducers({
  login,
  loginOld,
  board,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
