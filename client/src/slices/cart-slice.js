import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  itemPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const updatedTotalAmount =
        state.totalAmount + action.payload.enterItemPrice;

      const updatedAmountNum =
        state.totalQuantity + action.payload.enterAmountNum;

      const exitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.newItem.id
      );

      let updatedItems;

      let exitingItem = state.items[exitingItemIndex];

      if (exitingItem) {
        const updatedItem = {
          ...exitingItem,
          amount: exitingItem.amount + action.payload.enterAmountNum,
        };
        updatedItems = [...state.items];
        console.log(exitingItem);
        updatedItems[exitingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload.newItem);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalQuantity: updatedAmountNum,
      };
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      console.log(id);
      const deleteItemIndex = state.items.findIndex((item) => {
        return item.id === id;
      });
      const itemAmount = state.items[deleteItemIndex].amount;
      const updatedTotalQuantity = state.totalQuantity - itemAmount;
      state.items.splice(deleteItemIndex, 1);
      state.totalQuantity = updatedTotalQuantity;
    },
    clearItem() {
      return initialState;
    },
  },
});

export const { addToCart, removeItemFromCart, clearItem } = cartSlice.actions;

export default cartSlice.reducer;

/*************************************************/
