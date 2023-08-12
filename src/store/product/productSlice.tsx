import { createSlice } from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";

const productSlice = createSlice({
  name: "product",
  initialState: {
    prodcts: [],
  },
  reducers: { ...productsReducer },
});

export default productSlice;
