import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ItemQty from "../components/ItemQty";

export interface ItemeState {
  id: number;
  title: string;
  price: number;
  category?: string;
  description?: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  qty: number;
}

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
    setQty: (state, action: PayloadAction<number>) => {
      state.value.filter((item) =>
        item.id === action.payload ? (item.qty = 1) : item.qty
      );
    },
    change: (state, action: PayloadAction<{ id: number; type: string }>) => {
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

export const { addToCart, remove, setQty, change } = cartSlice.actions;

export default cartSlice.reducer;
