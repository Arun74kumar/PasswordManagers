/**
 * App bootstrap sagas
 * @format
 */

import { delay, put, takeLatest } from 'redux-saga/effects';

import { bootstrapApp, markAppAsReady } from './slice';

function* bootstrapAppSaga() {
  try {
    yield put(markAppAsReady());
    yield delay(400);
    // yield call(SplashScreen.hide);
  } catch (err) {
  } finally {
  }
}

function* appBootstrapSagas() {
  yield takeLatest(bootstrapApp, bootstrapAppSaga);
}

export { appBootstrapSagas };
