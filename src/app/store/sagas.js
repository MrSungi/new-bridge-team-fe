import { spawn } from 'redux-saga/effects';
import loginSaga from '../../pages/Login/store/loginSaga';
import boardsSaga from '../../pages/Boards/store/boardsSaga';

const rootSaga = function* rootSaga() {
  yield spawn(loginSaga);
  yield spawn(boardsSaga);
};

export default rootSaga;
