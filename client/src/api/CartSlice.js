import { createSlice } from "@reduxjs/toolkit";

// Store an array of product ids that have been added to cart
let initialState = {
  // Fetch ids from local storage
  prodIds: localStorage.getItem("ids")
    ? JSON.parse(localStorage.getItem("ids"))
    : [],
};

const prodCartSlice = createSlice({
  name: "addedToCartSlice",
  initialState,
  reducers: {
    addProdToCart: (state, action) => {
      state.prodIds.push(action.payload);
      localStorage.setItem("ids", JSON.stringify(state.prodIds));
    },
    removeFromCart: (state, action) => {
      const prodIdToRemove = action.payload.toString();
      state.prodIds = state.prodIds.filter((id) => id !== prodIdToRemove);
      localStorage.setItem("ids", JSON.stringify(state.prodIds));
    },
  },
});

export const { addProdToCart, removeFromCart } = prodCartSlice.actions;
export default prodCartSlice.reducer;
