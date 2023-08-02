/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logoutUser = createAsyncThunk("user/logout", async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("password");
});
