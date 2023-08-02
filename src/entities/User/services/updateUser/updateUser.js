/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { _baseURL } from "../../../../shared";

export const updateUser = createAsyncThunk("user/updateUser", async (formData, { rejectWithValue }) => {
  const myToken = localStorage.getItem("token");

  try {
    const res = await fetch(`${_baseURL}user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${myToken}`,
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      return rejectWithValue("Server Error!");
    }

    const data = await res.json();

    localStorage.setItem("password", formData.user.password);

    return data.user;
  } catch (err) {
    return rejectWithValue("Login or Password is wrong!");
  }
});
