import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    isProcessing: false,
    isInitLogin: false,
  },
  reducers: {
    authenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
