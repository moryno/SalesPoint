import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartQty: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const { _id, price, quantity } = action.payload;
      const existingProductIndex = state.products.findIndex(
        (product) => product._id === _id
      );

      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity += quantity;
      } else {
        state.products.push(action.payload);
        state.cartQty += 1;
      }
      state.total += Number(price) * Number(quantity);
    },
    removeProduct: (state, action) => {
      state.products.splice(
        state.products.findIndex(
          (product) => product._id === action.payload._id
        ),
        1
      );
      state.cartQty -= 1;
      state.total -=
        Number(action.payload.price) * Number(action.payload.quantity);
    },
    deleteCart: (state) => {
      state.products = [];
      state.cartQty = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
