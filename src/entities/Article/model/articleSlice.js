/* eslint-disable no-underscore-dangle */
import { createSlice } from "@reduxjs/toolkit";

import {
  getArticle,
  createArticle,
  editArticle,
  deleteArticle,
  setLike,
  deleteLike,
  isPendingAction,
  isRejectedAction,
} from "../services";
import { IDLE_STATUS, LOADING_STATUS, SUCCESS_STATUS, FAILURE_STATUS } from "../../../shared";

const initialState = {
  article: {},
  articleLoadingStatus: IDLE_STATUS,
  error: "",
};

const changeState = (state, action) => {
  state.article = action.payload;
  state.error = "";
  state.articleLoadingStatus = SUCCESS_STATUS;
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticle.fulfilled, changeState)
      .addCase(createArticle.fulfilled, changeState)
      .addCase(editArticle.fulfilled, changeState)
      .addCase(deleteArticle.fulfilled, changeState)
      .addCase(setLike.fulfilled, changeState)
      .addCase(deleteLike.fulfilled, changeState)
      .addMatcher(isPendingAction, (state) => {
        state.error = "";
        state.articleLoadingStatus = LOADING_STATUS;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.error = action.payload;
        state.articleLoadingStatus = FAILURE_STATUS;
      })
      .addDefaultCase(() => {});
  },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
