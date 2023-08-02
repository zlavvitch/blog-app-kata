/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";

import { formatArticle } from "../../../shared";

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
