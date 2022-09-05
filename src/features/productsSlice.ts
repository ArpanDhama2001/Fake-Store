import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllProductURL } from "../data/api/apiURL";

enum STATUS {
  idle = "idle",
  loading = "loading",
  error = "error",
}

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
  fav: boolean;
}

interface ProductsState {
  data: ItemeState[];
  status: string;
}

const initialState: ProductsState = {
  data: [],
  status: STATUS.idle,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ItemeState[]>) => {
      state.data = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productsSlice.actions;
export default productsSlice.reducer;

// THUNKS

export const fetchProducts = () => {
  return async function fetchProductsThunk(dispatch: any) {
    dispatch(setStatus(STATUS.loading));
    try {
      const res = await fetch(getAllProductURL());
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.idle));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUS.error));
    }
  };
};
