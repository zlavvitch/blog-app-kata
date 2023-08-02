/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
import { createAsyncThunk } from "@reduxjs/toolkit";

import { formatArticle } from "../../../shared";

export const fetchArticles = createAsyncThunk("articles/fetchArticles", async (page, { rejectWithValue }) => {
  const _baseURL = "https://blog.kata.academy/api/";
  const limit = 5;
  const newPage = (page - 1) * limit;

  // console.log(page);

  try {
    const res = await fetch(`${_baseURL}articles?limit=${limit}&offset=${newPage}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // if (!res.ok) {
    //   if (res.status === 500 || res.status === 500) {
    //     throw new Error("500", "Ошибка на сервере!");
    //   }

    //   throw new Error(`Could not fetch articles, status ${res.status}`);
    // }

    // console.log(res, res.ok, res.status === /[\d]/);

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
