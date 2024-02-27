import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4100/athena/api/v1/",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      providesTags: ["Products"],
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: "add-product",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...product }) => ({
        url: `update-product/${id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `delete-product/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Products"],
    }),
    queryProducts: builder.query({
      query: (product) => `search?query=${product}`,
      providesTags: ["Products"],
    }),
    getCartProducts: builder.query({
      query: () => "cart",
      providesTags: ["Products"],
    }),
    addToCart: builder.mutation({
      query: (cartProd) => ({
        url: "add-to-cart",
        method: "POST",
        body: cartProd,
      }),
      invalidatesTags: ["Products"],
    }),

    updateCartQty: builder.mutation({
      query: ({ id, ...product }) => ({
        url: `update-cart-product/${id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
    removeFromCart: builder.mutation({
      query: (id) => ({
        url: `delete-from-cart/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useQueryProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetCartProductsQuery,
  useAddToCartMutation,
  useUpdateCartQtyMutation,
  useRemoveFromCartMutation,
} = ApiSlice;
