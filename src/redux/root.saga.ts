import {all, fork} from 'redux-saga/effects';
import { SampleSaga } from './sample/sample.saga';
import { TestSaga } from './test/test.saga';

export const RootSaga = function* root() {
  yield all([
    fork(SampleSaga),
    fork(TestSaga),
  ]);
};
