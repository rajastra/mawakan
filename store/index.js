import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import loginSlice from "./login-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    login: loginSlice.reducer,
  },
});

export default store;
