import { spawn } from 'redux-saga/effects';
import loginSaga from '../../features/login/store/loginSaga';

const rootSaga = function* rootSaga() {
  yield spawn(loginSaga);
};

export default rootSaga;
