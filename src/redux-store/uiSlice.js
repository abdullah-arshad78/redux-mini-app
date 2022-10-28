import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "uiState",
  initialState: {
    showCart: false,
    notification: { status: null, message: null, title: null },
  },
  reducers: {
    showCart: (state) => {
      state.showCart = true;
    },
    hideCart: (state) => {
      state.showCart = false;
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    setNotification: (state, action) => {
      state.notification.title = action.payload.title;
      state.notification.status = action.payload.status;
      state.notification.message = action.payload.message;
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
