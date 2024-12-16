import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increaseCount: (state, action) => {
      return state + (action.payload || 1);
    },
    decreaseCount: (state, action) => {
      return state - (action.payload || 1);
    },
  },
});

export const { increaseCount, decreaseCount } = countSlice.actions;

export default countSlice.reducer;
