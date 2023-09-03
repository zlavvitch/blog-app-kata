/* eslint-disable no-underscore-dangle */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { _baseURL } from "../../../../shared";

export const deleteArticle = createAsyncThunk("article/deleteArticle", async (slug, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`${_baseURL}articles/${slug}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    if (!res.ok) {
      return rejectWithValue("Что-то пошло не так. Невозможно удалить статью!");
    }

    const data = await res.json();

    return data.article;
  } catch (err) {
    throw err.message;
  }
});
