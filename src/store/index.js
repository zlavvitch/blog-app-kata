// import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from "redux";
// import ReduxThunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import articles from "../reducers/articles";
import article from "../reducers/article";

const store = configureStore({
  reducer: { articles, article },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDafaultMiddleware) => getDafaultMiddleware(),
});

// const store = createStore(
//   combineReducers({ articles, article }),
//   // eslint-disable-next-line no-underscore-dangle
//   compose(applyMiddleware(ReduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );

export default store;
