import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "cart",
  initialState: {
    token: "",
    isLogedIn: false,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isLogedIn = true;
    },
    logout(state) {
      state.token = "";
      state.isLogedIn = false;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
