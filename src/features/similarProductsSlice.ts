import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemeState } from "./productsSlice";

export interface SimilarProductsState {
  data: ItemeState[];
}

const initialState: SimilarProductsState = {
  data: [],
};

export const similarProductsSlice = createSlice({
  name: "similarProducts",
  initialState,
  reducers: {
    addSimilarProducts: (state, action: PayloadAction<ItemeState[]>) => {
      state.data = initialState.data;

      state.data = action.payload;
    },
  },
});

export const { addSimilarProducts } = similarProductsSlice.actions;

export default similarProductsSlice.reducer;
