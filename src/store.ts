import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import favSlice from "./features/favouriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    fav: favSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
