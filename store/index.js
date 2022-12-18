import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import loginSlice from "./login-slice";
import tokenSlice from "./token-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    login: loginSlice.reducer,
    token: tokenSlice.reducer,
  },
});

export default store;
