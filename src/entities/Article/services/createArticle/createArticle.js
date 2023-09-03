/* eslint-disable no-underscore-dangle */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { formatArticle, _baseURL } from "../../../../shared";

export const createArticle = createAsyncThunk("article/createArticle", async (dataArticle, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`${_baseURL}articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(dataArticle),
    });

    if (!res.ok) {
      return rejectWithValue("Что-то пошло не так");
    }

    const data = await res.json();

    const formatData = formatArticle(data.article);

    return formatData;
  } catch (err) {
    throw err.message;
  }
});
