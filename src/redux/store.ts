import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import rootSaga from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = (initialState, nextCtx) => {
  const isClient = typeof window !== "undefined";

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  if (process.env.NODE_ENV === "development" && isClient) {
    window.store = store;
  }

  sagaMiddleware.run(rootSaga, nextCtx);
  return store;
};

// @ts-ignore
export const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});
