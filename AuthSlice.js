import {createSlice } from "@reduxjs/toolkit";
const intialAuth = {
    isAuth: false,
  };
  
  const AuthSlice = createSlice({
    name: "auth",
    initialState: intialAuth,
    reducers: {
      login(state) {
        state.isAuth = true;
      },
      logout(state) {
        state.isAuth = false;
      },
    },
  });
  export const AuthActions = AuthSlice.actions;

    export default AuthSlice.reducer;