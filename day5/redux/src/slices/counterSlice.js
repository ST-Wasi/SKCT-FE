import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer