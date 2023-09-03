/* eslint-disable no-underscore-dangle */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { formatArticle, _baseURL } from "../../../../shared";

export const setLike = createAsyncThunk("article/setLike", async (slug, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`${_baseURL}articles/${slug}/favorite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    if (!res.ok) {
      return rejectWithValue("Что-то пошло не так. Невозможно поставить лайк!");
    }

    const data = await res.json();

    const formatData = formatArticle(data.article);

    return formatData;
  } catch (err) {
    throw err.message;
  }
});
