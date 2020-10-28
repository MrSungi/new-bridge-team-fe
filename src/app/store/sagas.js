import { spawn } from 'redux-saga/effects';
import loginSaga from '../../pages/Login/store/loginSaga';

const rootSaga = function* rootSaga() {
  yield spawn(loginSaga);
};

export default rootSaga;
