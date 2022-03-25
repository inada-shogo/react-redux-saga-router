// import {ApiLogin} from '../../api/auth/api-login';
import actionCreatorFactory from "typescript-fsa";

const ActionCreator = actionCreatorFactory("sample");

export const SampleActions = {
  test: ActionCreator<{ str: string; onSuccess: (str: string) => void }>(
    "test"
  ),
  setMessage: ActionCreator<{ str: string }>("set/Message"),
};
