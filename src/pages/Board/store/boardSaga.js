import { takeLatest, call, put } from 'redux-saga/effects';
import { UPVOTE_ITEM, UPVOTE_ITEM_ERROR, UPVOTE_ITEM_INIT } from './boardActionTypes';
import api from './boardApi';

function* upvoteSaga(action) {
  try {
    // const {data} = yield call(api.updateVote);
    yield call(api.updateVote);
    yield put({ type: UPVOTE_ITEM, payload: action.payload });
  } catch (e) {
    yield put({ type: UPVOTE_ITEM_ERROR });
  }
}

function* boardSaga() {
  yield takeLatest(UPVOTE_ITEM_INIT, upvoteSaga);
}

export default boardSaga;
