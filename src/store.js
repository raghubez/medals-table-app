import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import medalsTableReducer from "./reducers";

export const reducers = combineReducers({
  medalsTable: medalsTableReducer
});

export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}

export const store = configureStore();
