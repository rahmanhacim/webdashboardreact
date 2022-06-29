import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const uiSlice = createSlice({
  name: "ui",
  initialState: { pagewait: true, loading: false, pathname: "/" },
  reducers: {
    showLoading(state) {
      state.loading = true;
    },
    hideLoading(state) {
      state.loading = false;
    },
    setPathname(state, action) {
      state.pathname = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
