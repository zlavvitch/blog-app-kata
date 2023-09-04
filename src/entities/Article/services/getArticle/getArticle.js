/* eslint-disable no-underscore-dangle */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { formatArticle, _baseURL } from "../../../../shared";

export const getArticle = createAsyncThunk("article/fetchArticle", async (slug, { rejectWithValue }) => {
  try {
    const res = await fetch(`${_baseURL}articles/${slug}`);

    if (!res.ok) {
      return rejectWithValue("Проблемка");
    }

    const data = await res.json();

    const formatData = formatArticle(data.article);

    return formatData;
  } catch (err) {
    throw err.message;
  }
});
