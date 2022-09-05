import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, ItemeState } from "./cartSlice";

const initialState: CartState = {
  value: [],
};

export const favSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<ItemeState>) => {
      state.value.push(action.payload);
    },
    removeFromFav: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFav, removeFromFav } = favSlice.actions;

export default favSlice.reducer;
