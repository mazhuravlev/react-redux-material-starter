import { AnyAction, combineReducers } from "redux";

export interface IStoreState {
  test: null;
}

function testReducer(prevState: any, action: AnyAction) {
  return null;
}

export default combineReducers<IStoreState>({ test: testReducer });
