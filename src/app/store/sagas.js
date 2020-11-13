import { spawn } from 'redux-saga/effects';
import loginSaga from '../../pages/Login/store/loginSaga';
import boardsSaga from '../../pages/Boards/store/boardsSaga';
import boardSaga from '../../pages/Board/store/boardSaga';

const rootSaga = function* rootSaga() {
  yield spawn(loginSaga);
  yield spawn(boardsSaga);
  yield spawn(boardSaga);
};

export default rootSaga;
