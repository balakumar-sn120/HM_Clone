import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Need to move into .env
const hmRequestHeaders = {
  "X-RapidAPI-Key": "7d08a1bf91mshe97d4bea5d3d734p1d3173jsnf37ef765abb8",
  "X-RapidAPI-Host":
    "apidojo-hm-hennes-mauritz-v1.p.rapidapi.comapidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (body) => {
        return {
          url: "/products/list?" + new URLSearchParams(body).toString(),
          method: "GET",
          headers: hmRequestHeaders,
        };
      },
      transformResponse: (res) => {
        return {
          products: res.results,
          totalProductCount: res.pagination.numberOfPages,
        };
      },
    }),
    getCategories: builder.query({
      query: (body) => {
        return {
          url: "/categories/list?" + new URLSearchParams(body).toString(),
          method: "GET",
          headers: hmRequestHeaders,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = apiSlice;
