import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOps";

const authSlice = createSlice({
  name: "filters",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) =>
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    }),
});

export default authSlice.reducer;
