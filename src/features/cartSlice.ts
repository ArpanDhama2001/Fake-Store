import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
}

export interface CartState {
  value: ItemeState[];
}

const initialState: CartState = {
  value: [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3, count: 100 },
    },
  ],
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
  },
});

export const { addToCart, remove } = cartSlice.actions;

export default cartSlice.reducer;
