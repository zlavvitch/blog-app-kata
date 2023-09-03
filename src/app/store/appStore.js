import { configureStore } from "@reduxjs/toolkit";

import { articlesReducer as articles } from "../../entities/Articles";
import { articleReducer as article } from "../../entities/Article";
import { userReducer as user } from "../../entities/User";

const store = configureStore({
  reducer: { user, articles, article },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDafaultMiddleware) => getDafaultMiddleware(),
});

export default store;
