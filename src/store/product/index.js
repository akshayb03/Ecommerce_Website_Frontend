import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  cartItems: [],
  wishlistItems: [],
};

export const slice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    saveProductList: (state, payload) => {
      state.productList = payload.payload;
    },
    saveToCart: (state, payload) => {
      const found = state.cartItems.find(
        (item) => item.id === payload.payload.id
      );
      if (!found) {
        const newObj = {
          ...payload.payload,
          quantity: 1,
        };
        state.cartItems.push(newObj);
      } else {
        found.quantity += 1;
      }
    },
    saveToWishlist: (state, payload) => {
      state.wishlistItems.push(payload.payload);
    },
    removeFromCart: (state, payload) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.payload.id
      );
    },
    removeFromWishlist: (state, payload) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== payload.payload.id
      );
    },
    incrementQuantity: (state, payload) => {
      const selectedProduct = state.cartItems.find(
        (item) => item.id === payload.payload.id
      );
      selectedProduct.quantity += 1;
    },
    decrementQuantity: (state, payload) => {
      const selectedProduct = state.cartItems.find(
        (item) => item.id === payload.payload.id
      );
      if (selectedProduct.quantity > 1) {
        selectedProduct.quantity -= 1;
      }
    },
  },
});

export const {
  saveProductList,
  saveToCart,
  saveToWishlist,
  removeFromCart,
  removeFromWishlist,
  incrementQuantity,
  decrementQuantity,
} = slice.actions;

export default slice.reducer;
