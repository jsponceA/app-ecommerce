import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    token: null,
    user: {},
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
    clearUser: (state) => {
      state.user = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, setUser, clearToken, clearUser } =
  currentUserSlice.actions;

export default currentUserSlice.reducer;
