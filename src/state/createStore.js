import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "../sessionStorage";

import reducer from "../reducers";

const middleware = [thunk];
// expose store when run in Cypress

const initialState = loadState();

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => {
  saveState(store.getState());
});

// expose store when run in Cypress
if (typeof window !== "undefined" && window.Cypress) {
  window.store = store;
}

// preloadedState will be passed in by the plugin
export default (preloadedState) => {
  return createStore(reducer, preloadedState);
};
