/* eslint-disable import/prefer-default-export */
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

    // if (!res.ok) {
    //   return rejectWithValue("Email or Username is already taken!");
    // }

    const data = await res.json();

    const { user } = data;
    const { password } = formData.user;

    localStorage.setItem("token", user.token);
    localStorage.setItem("password", password);

    return user;
  } catch (err) {
    return rejectWithValue("Email or Username is already taken!");
  }
});

// throw err.message;
// console.log(err.message);
