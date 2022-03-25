import { takeEvery } from "redux-saga/effects";
import { Store } from "../store";
import { TestActions } from './test.action';

function* tryTest(action: ReturnType<typeof TestActions.setMessage>) {
  yield;
  console.log("セットしますーーー！");
  Store.dispatch(TestActions.setMessage({ str: action.payload.str }));
}

export function* TestSaga() {
  yield takeEvery(TestActions.test, tryTest);
}
