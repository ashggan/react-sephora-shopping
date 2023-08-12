import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";

const productsStore = configureStore({ reducer: productsReducer });

export default productsStore;
