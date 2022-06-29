import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import authSlice from "@modules/auth/client/redux/slice";
import uiSlice from "./ui-slice";

const makeStore = () =>
  configureStore({
    reducer: { ui: uiSlice.reducer, auth: authSlice.reducer },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
