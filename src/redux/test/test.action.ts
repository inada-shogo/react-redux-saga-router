// import {ApiLogin} from '../../api/auth/api-login';
import actionCreatorFactory from "typescript-fsa";

const ActionCreator = actionCreatorFactory("test");

export const TestActions = {
  test: ActionCreator<{ str: string }>("test"),
  setMessage: ActionCreator<{ str: string }>("set/Message"),
};
