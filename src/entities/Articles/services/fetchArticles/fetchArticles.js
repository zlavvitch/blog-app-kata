/* eslint-disable no-underscore-dangle */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { formatArticle, _baseURL } from "../../../../shared";

export const fetchArticles = createAsyncThunk("articles/fetchArticles", async (currPage, { rejectWithValue }) => {
  const token = localStorage.getItem("token");

  const limit = 5;
  const newPage = currPage * limit - 5;

  try {
    const res = await fetch(`${_baseURL}articles?limit=${limit}&offset=${newPage}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    if (!res.ok) {
      return rejectWithValue("We have some server problems!");
    }

    const data = await res.json();
    const articles = data.articles.map(formatArticle);
    const formatData = { ...data, articles, articlesPage: currPage };

    return formatData;
  } catch (err) {
    return rejectWithValue("We have some server problems!");
  }
});
