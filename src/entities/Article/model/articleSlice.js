/* eslint-disable no-underscore-dangle */
import { createSlice } from "@reduxjs/toolkit";

import { fetchArticle } from "../services/fetchArticle";
import { IDLE_STATUS, LOADING_STATUS, SUCCESS_STATUS, FAILURE_STATUS } from "../../../shared";

const initialState = {
  article: {},
  articleLoadingStatus: IDLE_STATUS,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.articleLoadingStatus = LOADING_STATUS;
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.article = action.payload;
        state.articleLoadingStatus = SUCCESS_STATUS;
      })
      .addCase(fetchArticle.rejected, (state) => {
        state.articleLoadingStatus = FAILURE_STATUS;
      })
      .addDefaultCase(() => {});
  },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;

// const { actions, reducer } = articleSlice;

// export default reducer;

// export const { articleFetched, articleFetching, articleFetchingError } = actions;
