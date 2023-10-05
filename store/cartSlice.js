import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      return state;
    },
    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((p) => {
        if (p._id === action.payload?.id) {
          if (action.payload.key === "qty") {
            p.totalAmt = p?.price * action.payload?.val;
          }
      
          return { ...p, [action.payload?.key]: action.payload.val };
         
        }
        return p;
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart ,removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
