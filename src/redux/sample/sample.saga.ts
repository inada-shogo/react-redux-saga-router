import { put, takeEvery } from "redux-saga/effects";
import { SampleActions } from "./sample.action";

function* tryTest(action: ReturnType<typeof SampleActions.test>) {
  yield put(SampleActions.setMessage({ str: action.payload.str }));
  action.payload.onSuccess(action.payload.str);
}

export function* SampleSaga() {
  yield takeEvery(SampleActions.test, tryTest);
}
