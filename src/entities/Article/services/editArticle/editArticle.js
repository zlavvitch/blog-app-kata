/* eslint-disable no-underscore-dangle */
import { createAsyncThunk } from "@reduxjs/toolkit";

import { formatArticle, _baseURL } from "../../../../shared";

export const editArticle = createAsyncThunk("article/editArticle", async (dataArticle, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const { slug, ...article } = dataArticle;

    const res = await fetch(`${_baseURL}articles/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(article),
    });

    if (!res.ok) {
      return rejectWithValue("Что-то пошло не так. Невозможно отредактировать статью!");
    }

    const data = await res.json();

    const formatData = formatArticle(data.article);

    return formatData;
  } catch (err) {
    throw err.message;
  }
});
