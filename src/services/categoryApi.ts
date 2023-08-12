import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CATEGOREIS_BASE_URL } from "../utils/constants";
import { addParams } from "../utils/helpers";
import { CategoryApiType } from "../types/category";

export const CategoryApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: CATEGOREIS_BASE_URL }),
  endpoints: (builder) => ({
    getCategoriesList: builder.query<CategoryApiType, string>({
      query: () => addParams("/v2/list")({ size: 20 }),
    }),
  }),
});

export const { useGetCategoriesListQuery } = CategoryApi;
