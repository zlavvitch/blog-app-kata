/* eslint-disable no-underscore-dangle */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { IDLE_STATUS, LOADING_STATUS, SUCCESS_STATUS, FAILURE_STATUS } from "../../constants/StatusTypes";
import formatArticle from "../../utilites/formatArticle";

const initialState = {
  article: {},
  articleLoadingStatus: IDLE_STATUS,
};

export const fetchArticle = createAsyncThunk("article/fetchArticle", async (slug) => {
  const _baseURL = "https://blog.kata.academy/api/";
  try {
    const res = await fetch(`${_baseURL}articles/${slug}`);

    if (!res.ok) {
      if (res.status === 500) {
        throw new Error(`Could not fetch article, status ${res.status}`);
      }
    }

    const data = await res.json();
    const formatData = formatArticle(data.article);

    return formatData;
  } catch (err) {
    throw err.message;
  }
});

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

const { actions, reducer } = articleSlice;

export default reducer;

export const { articleFetched, articleFetching, articleFetchingError } = actions;
