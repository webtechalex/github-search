import { call, put, takeEvery } from 'redux-saga/effects';
import { get } from 'axios';

import { searchLoading, searchSuccess, searchFail } from '../actions';

function* fetchSearchResults(action) {
  try {
    yield put(searchSuccess());
    yield put(searchLoading(true));
    const results = yield call(get, encodeURI(action.payload));
    yield put(searchLoading(false));
    yield put(searchSuccess(results));
  } catch (err) {
    yield put(searchLoading(false));
    yield put(searchFail(err.message));
  }
}

function* searchSaga() {
  yield takeEvery('SEARCH_REQUESTED', fetchSearchResults);
}

export default searchSaga;