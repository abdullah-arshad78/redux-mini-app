import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartState",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    isChanged: false,
  },
  reducers: {
    replaceCart: (state, action) => {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addToCart: (state, action) => {
      state.isChanged = true;
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantityToAdd;
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          description: action.payload.description,
          quantity: action.payload.quantityToAdd,
        });
      }
      state.totalQuantity += action.payload.quantityToAdd;
      state.totalAmount = +(
        state.totalAmount +
        action.payload.quantityToAdd * action.payload.price
      ).toFixed(2);
    },
    removeFromCart: (state, action) => {
      state.isChanged = true;
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.quantity = existingItem.quantity - 1;
      }
      state.totalQuantity -= 1;
      state.totalAmount = +(state.totalAmount - existingItem.price).toFixed(2);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
