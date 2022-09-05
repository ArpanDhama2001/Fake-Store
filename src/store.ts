import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import favReducer from "./features/favouriteSlice";
import productsReducer from "./features/productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
