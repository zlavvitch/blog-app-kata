/* eslint-disable no-underscore-dangle */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { formatArticle, _baseURL } from "../../../../shared";

export const getArticle = createAsyncThunk("article/fetchArticle", async (slug, { rejectWithValue }) => {
  try {
    const res = await fetch(`${_baseURL}articles/${slug}`);

    // if (!res.ok) {
    //   if (res.status === 500) {
    //     throw new Error(`Could not fetch article, status ${res.status}`);
    //   }
    // }

    if (!res.ok) {
      return rejectWithValue("Проблемка");
    }

    const data = await res.json();

    const formatData = formatArticle(data.article);

    // console.log("DATA", formatData);

    return formatData;
  } catch (err) {
    throw err.message;
  }
});
