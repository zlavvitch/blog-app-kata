/* eslint-disable no-underscore-dangle */
import { createSlice } from "@reduxjs/toolkit";

import { IDLE_STATUS, LOADING_STATUS, SUCCESS_STATUS, FAILURE_STATUS } from "../../../shared";
import { fetchArticles } from "../services";
// import { fetchArticles } from "../services";
// import formatArticle from "../../../shared/lib/formatArticle";

const initialState = {
  articles: [],
  articlesCount: 0,
  articlesLoadingStatus: IDLE_STATUS,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.articlesLoadingStatus = LOADING_STATUS;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload.articles;
        state.articlesCount = action.payload.articlesCount;
        state.articlesLoadingStatus = SUCCESS_STATUS;
      })
      .addCase(fetchArticles.rejected, (state) => {
        state.articlesLoadingStatus = FAILURE_STATUS;
      })
      .addDefaultCase(() => {});
  },
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;
