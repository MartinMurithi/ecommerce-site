import { configureStore } from "@reduxjs/toolkit";
import SavedToCart from "./CartSlice";
import { ApiSlice } from "./ApiSlice";

const store = configureStore({
  reducer: {
    savedToCartReducer: SavedToCart,
    [ApiSlice.reducerPath]: ApiSlice.reducer, //RTK QUERY Reducer that intergrates rtk query with redux store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
  devTools: true,
});

export default store;
