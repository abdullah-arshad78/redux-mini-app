import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "./uiSlice";
import { cartReducer } from "./cartSlice";

const store = configureStore({
  reducer: { uiState: uiReducer, cartState: cartReducer },
});

export default store;
