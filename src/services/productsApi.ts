import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PRODUCTS_BASE_URL } from "../utils/constants";
import { addParams } from "../utils/helpers";
import { APIProduct, APIProducts } from "../types/apiProduct";

export const ProductApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: PRODUCTS_BASE_URL }),
  endpoints: (builder) => ({
    getProdyctsList: builder.query<APIProducts, string>({
      query: () => addParams("/v2/list")(),
    }),
    getProdyctById: builder.query<APIProduct, string>({
      query: (id: string) => addParams("/v2/detail")({ id }),
    }),
    seatchProductByCategory: builder.query<APIProducts, string>({
      query: (category: string) =>
        addParams("/v2/get-filters")({ root_category: category, size: 30 }),
    }),
  }),
});

export const {
  useGetProdyctsListQuery,
  useGetProdyctByIdQuery,
  useSeatchProductByCategoryQuery,
} = ProductApi;
