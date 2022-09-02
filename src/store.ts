import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import qtySlice from "./features/qtySlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    qty: qtySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
