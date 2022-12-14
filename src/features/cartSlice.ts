import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemeState } from "./productsSlice";

export interface CartState {
  value: ItemeState[];
}

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ItemeState>) => {
      state.value.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.value = [];
    },
    setQty: (state, action: PayloadAction<number>) => {
      state.value.filter((item) =>
        item.id === action.payload ? (item.qty = 1) : item.qty
      );
    },
    change: (state, action: PayloadAction<{ id: number; type: string }>) => {
      // eslint-disable-next-line array-callback-return
      state.value.filter((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "increment" && item.qty < 10) {
            item.qty++;
          } else if (action.payload.type === "decrement" && item.qty > 1) {
            --item.qty;
          }
        }
      });
    },
  },
});

export const { addToCart, remove, setQty, change, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
