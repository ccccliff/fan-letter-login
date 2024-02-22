import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLogin: (state, action) => {
      state.isLogin = true;
    },
    isLogout: (state, action) => {
      state.isLogin = false;
    },
  },
});

export const { isLogin, isLogout } = auth.actions;
export default auth.reducer;
