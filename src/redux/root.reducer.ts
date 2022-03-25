import {combineReducers} from 'redux';
import { SampleReducer } from './sample/sample.reducer';
import { SampleState } from './sample/sample.type';
import { TestReducer } from './test/test.reducer';
import { TestState } from './test/test.type';
import {connectRouter} from "connected-react-router";
import { History } from "history";

export type State = {
  sample: SampleState;
  test: TestState;
};

export const RootReducer = (history: History) =>
  combineReducers({
    sample: SampleReducer,
    test: TestReducer,
    router: connectRouter(history),
  });
