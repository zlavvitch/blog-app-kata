/* eslint-disable no-underscore-dangle */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { formatArticle } from "../../../../shared";

export const fetchArticles = createAsyncThunk("articles/fetchArticles", async (page, { rejectWithValue }) => {
  const _baseURL = "https://blog.kata.academy/api/";
  const limit = 5;
  const newPage = (page - 1) * limit;
  const token = localStorage.getItem("token");

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
    const formatData = { ...data, articles };

    return formatData;
  } catch (err) {
    return rejectWithValue("We have some server problems!");
  }
});
