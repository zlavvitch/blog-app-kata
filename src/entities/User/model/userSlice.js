/* eslint-disable no-underscore-dangle */
import { createSlice } from "@reduxjs/toolkit";

import { IDLE_STATUS, LOADING_STATUS, SUCCESS_STATUS, FAILURE_STATUS } from "../../../shared";
import {
  registerUser,
  logoutUser,
  getCurrentUser,
  loginUser,
  updateUser,
  isRejectedAction,
  isPendingAction,
} from "../services";

const initialState = {
  user: { username: "", email: "", bio: "", image: "", token: "" },
  isAuth: false,
  error: "",
  userLoadingStatus: IDLE_STATUS,
};

const changeState = (state, action) => {
  state.user = action.payload;
  state.isAuth = true;
  state.error = "";
  state.userLoadingStatus = SUCCESS_STATUS;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.fulfilled, changeState)
      .addCase(registerUser.fulfilled, changeState)
      .addCase(loginUser.fulfilled, changeState)
      .addCase(updateUser.fulfilled, changeState)
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = initialState.user;
        state.isAuth = false;
        state.userLoadingStatus = IDLE_STATUS;
      })
      .addMatcher(isPendingAction, (state) => {
        state.error = "";
        state.userLoadingStatus = LOADING_STATUS;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.error = action.payload;
        state.userLoadingStatus = FAILURE_STATUS;
      })
      .addDefaultCase(() => {});
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
