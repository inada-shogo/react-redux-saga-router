import { reducerWithInitialState } from "typescript-fsa-reducers";
import { SampleActions } from "./sample.action";
import { SampleState } from "./sample.type";

const initialState: SampleState = { str: "" };

export const SampleReducer = reducerWithInitialState<SampleState>(
  initialState
).case(SampleActions.setMessage, (state, payload) => ({
  ...state,
  str: payload.str,
}));
