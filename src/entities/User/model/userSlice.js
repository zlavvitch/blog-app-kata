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

// const changeState = (state, action) => {
//   state.user.username = action.payload.user.username;
//   state.user.email = action.payload.user.email;
//   state.isAuth = true;
//   state.error = "";
//   state.userLoadingStatus = SUCCESS_STATUS;
// };

// .addCase(getCurrentUser.fulfilled, (state, action) => {
//   // state.user = action.payload.user;
//   // console.log(action.payload);
//   state.user = action.payload;
//   state.error = "";
//   state.userLoadingStatus = SUCCESS_STATUS;
// })
// .addCase(updateUser.fulfilled, (state, action) => {
//   // state.user = action.payload.user;
//   // console.log(action.payload);
//   state.user = action.payload;
//   state.error = "";
//   state.userLoadingStatus = SUCCESS_STATUS;
// })
// .addCase(updateUser.fulfilled, (state, action) => {
//   state.user.username = action.payload.user.username;
//   state.user.email = action.payload.user.email;
//   state.user.image = action.payload.user.image;
//   state.error = "";
//   state.userLoadingStatus = SUCCESS_STATUS;
// })

// .addCase(getCurrentUser.rejected, (state) => {
//   state.userLoadingStatus = FAILURE_STATUS;
// })
// .addCase(logoutUser.rejected, (state) => {
//   state.userLoadingStatus = FAILURE_STATUS;
// })
// .addCase(loginUser.rejected, (state) => {
//   state.userLoadingStatus = FAILURE_STATUS;
// })
// .addCase(registerUser.rejected, (state) => {
//   state.userLoadingStatus = FAILURE_STATUS;
// })

// .addCase(getCurrentUser.pending, (state) => {
//   state.userLoadingStatus = LOADING_STATUS;
// })
// .addCase(logoutUser.pending, (state) => {
//   state.userLoadingStatus = LOADING_STATUS;
// })
// .addCase(loginUser.pending, (state) => {
//   state.userLoadingStatus = LOADING_STATUS;
// })
// .addCase(registerUser.pending, (state) => {
//   state.userLoadingStatus = LOADING_STATUS;
// })

// .addCase(registerUser.fulfilled, (state, action) => {
//   state.user.username = action.payload.user.username;
//   state.user.email = action.payload.user.email;
//   state.user.password = action.payload.user.password;
//   state.user.token = action.payload.user.token;
//   state.isAuth = true;
//   state.error = "";
//   state.userLoadingStatus = SUCCESS_STATUS;
// })
// .addCase(loginUser.fulfilled, (state, action) => {
//   state.user.username = action.payload.user.username;
//   state.user.email = action.payload.user.email;
//   state.user.password = action.payload.user.password;
//   state.user.token = action.payload.user.token;
//   state.isAuth = true;
//   state.error = "";
//   state.userLoadingStatus = SUCCESS_STATUS;
// })
// .addCase(getCurrentUser.fulfilled, (state, action) => {
//   state.user.username = action.payload.user.username;
//   state.user.email = action.payload.user.email;
//   state.user.password = action.payload.user.password;
//   state.user.token = action.payload.user.token;
//   state.isAuth = true;
//   state.error = "";
//   state.userLoadingStatus = SUCCESS_STATUS;
// })
