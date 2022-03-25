import { reducerWithInitialState } from "typescript-fsa-reducers";
import { TestActions } from './test.action';
import { TestState } from "./test.type";

const initialState: TestState = { str: "" };

export const TestReducer = reducerWithInitialState<TestState>(
  initialState
).case(TestActions.setMessage, (state, payload) => ({
  ...state,
  str: payload.str,
}));
