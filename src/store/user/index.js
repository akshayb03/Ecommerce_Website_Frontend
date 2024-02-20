import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const slice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    authenticate: (state, payload) => {
      state.isAuthenticated = payload.payload;
    },
  },
});

export const { authenticate } = slice.actions;

export default slice.reducer;
