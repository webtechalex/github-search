import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { get } from 'axios';

import { searchSuccess, searchFail } from '../actions';

function* fetchSearchResults(action) {
  try {
    const results = yield call(get, action.payload);
    yield put(searchSuccess(results));
  } catch (err) {
    yield put(searchFail(err.message));
  }
}

function* searchSaga() {
  yield takeEvery('SEARCH_REQUESTED', fetchSearchResults);
}

export default searchSaga;