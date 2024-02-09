/**
 * Root saga
 * @format
 */
import { spawn } from 'redux-saga/effects';

import { appBootstrapSagas } from '@app/modules/app-bootstrap';

export function* rootSaga() {
  yield spawn(appBootstrapSagas);
}
