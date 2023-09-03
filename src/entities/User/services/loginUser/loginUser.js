/* eslint-disable no-underscore-dangle */

import { createAsyncThunk } from "@reduxjs/toolkit";

import { _baseURL } from "../../../../shared";

export const loginUser = createAsyncThunk("user/loginUser", async (formData, { rejectWithValue }) => {
  try {
    const res = await fetch(`${_baseURL}users/login`, {
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

    localStorage.setItem("token", data.user.token);
    localStorage.setItem("password", formData.user.password);

    return user;
  } catch (err) {
    return rejectWithValue("Email or Username is already taken!");
  }
});

// checkStatus = async (res) => {
//   if (res.status >= 200 && res.status < 300) return await res.json();

//   throw await res.json();
// };
// { rejectWithValue }
