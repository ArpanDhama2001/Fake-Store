import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 1;

export const qtySlice = createSlice({
  name: "qty",
  initialState,
  reducers: {
    increment: (state) => {
      state++;
    },
    decrement: (state) => {
      state--;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state += action.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = qtySlice.actions;

export default qtySlice.reducer;
