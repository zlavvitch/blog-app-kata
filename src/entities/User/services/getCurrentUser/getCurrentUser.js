/* eslint-disable no-underscore-dangle */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { _baseURL } from "../../../../shared";

export const getCurrentUser = createAsyncThunk("user/getCurrentUser", async (myToken, { rejectWithValue }) => {
  try {
    const res = await fetch(`${_baseURL}user`, {
      method: "GET",
      headers: {
        Authorization: `Token ${myToken}`,
      },
    });

    if (!res.ok) {
      return rejectWithValue("Server Error!");
    }

    const { user } = await res.json();

    localStorage.setItem("token", user.token);

    return user;
  } catch (err) {
    return rejectWithValue("Login or Password is wrong!");
  }
});
