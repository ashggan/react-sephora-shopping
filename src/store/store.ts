import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
import { ProductApi } from "../services/productsApi";
import { CategoryApi } from "../services/categoryApi";

const store = configureStore({
  reducer: {
    [ProductApi.reducerPath]: ProductApi.reducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware, CategoryApi.middleware),
});

 
export default store;