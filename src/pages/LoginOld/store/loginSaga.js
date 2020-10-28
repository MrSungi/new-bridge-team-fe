import { takeLatest, call, put } from 'redux-saga/effects';
import { authenticateUser, authenticateUserError, setCurrentUser } from './loginSlice';
import loginApi from './loginApi';

function* authenticateUserSaga(action) {
  const { payload: email } = action;
  try {
    const userDetails = yield call(loginApi.authenticateUser, email);
    yield put(setCurrentUser(userDetails));
  } catch (e) {
    yield put(authenticateUserError());
  }
}

function* loginSaga() {
  yield takeLatest(authenticateUser.type, authenticateUserSaga);
}

export default loginSaga;
