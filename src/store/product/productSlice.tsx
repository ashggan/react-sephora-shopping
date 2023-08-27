import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_BASE_URL, headers } from "../../utils/constants";
import { ProductState } from "../../types/product";
// import productsReducer from "./productsReducer";

const initialState: ProductState = {
  products: [],
  status: "idle", // | 'success' | 'failed' | 'loading' ,
  error: null,
};

const config = {
  headers,
};

export const fetchProducts = createAsyncThunk("v2/list", async () => {
  try {
    const res = await axios.get(PRODUCTS_BASE_URL, config);
    return [...res.data];
  } catch (error) {
    // return error;
    throw new Error("Failed to fetch products");
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, _action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const getProductsList = (state: ProductState) => state.products;
export const getProductsStatus = (state: ProductState) => state.status;
export const getProductsError = (state: ProductState) => state.error;

export default productSlice.reducer;
