/* eslint-disable no-underscore-dangle */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { _baseURL } from "../../../../shared";

export const registerUser = createAsyncThunk("user/registerUser", async (formData, { rejectWithValue }) => {
  try {
    const res = await fetch(`${_baseURL}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    const { user } = data;

    localStorage.setItem("token", user.token);

    return user;
  } catch (err) {
    return rejectWithValue("Email or Username is already taken!");
  }
});
