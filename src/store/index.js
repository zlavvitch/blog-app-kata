import { configureStore } from "@reduxjs/toolkit";

import articles from "../components/ArticleList/articlesSlice";
import article from "../components/SingleArticle/articleSlice";

const store = configureStore({
  reducer: { articles, article },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDafaultMiddleware) => getDafaultMiddleware(),
});

export default store;

// import articles from "../reducers/articles";
