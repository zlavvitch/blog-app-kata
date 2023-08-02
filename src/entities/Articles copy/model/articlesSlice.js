/* eslint-disable no-underscore-dangle */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  IDLE_STATUS,
  LOADING_STATUS,
  SUCCESS_STATUS,
  FAILURE_STATUS,
} from "../../../pages/sign-up/shared/api/StatusTypes";
import formatArticle from "../../../pages/sign-up/shared/lib/formatArticle";

const initialState = {
  articles: [],
  articlesCount: 0,
  articlesLoadingStatus: IDLE_STATUS,
};

export const fetchArticles = createAsyncThunk("articles/fetchArticles", async (page) => {
  const _baseURL = "https://blog.kata.academy/api/";
  const limit = 5;
  const newPage = (page - 1) * limit;

  try {
    const res = await fetch(`${_baseURL}articles?limit=${limit}&offset=${newPage}`);

    if (!res.ok) {
      if (res.status === 500) {
        throw new Error("500", "Ошибка на сервере!");
      }

      throw new Error(`Could not fetch articles, status ${res.status}`);
    }

    const data = await res.json();
    const articles = data.articles.map(formatArticle);
    const formatData = { ...data, articles };

    return formatData;
  } catch (err) {
    throw err.message;
  }
});

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

// const { actions, reducer } = articlesSlice;

// export default reducer;

// export const { articlesFetched, articlesFetching, articlesFetchingError } = actions;
