import { configureStore } from "@reduxjs/toolkit";
import product from "./product/index";

export const store = configureStore({
  reducer: {
    product: product,
  },
});
