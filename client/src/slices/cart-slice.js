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
    addToCart: (state = initialState, action) => {
      const updatedTotalAmount =
        state.totalAmount + action.payload.enterItemPrice;

      console.log(updatedTotalAmount);

      /**
       * total quantity
       */
      const updatedTotalQuantity =
        state.totalQuantity +
        (action.payload.enterAmountNum - action.payload.enterAmountNum + 1);

      const exitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.newItem.id
      );

      let updatedItems;

      let exitingItem = state.items[exitingItemIndex];

      if (exitingItem) {
        const updatedItem = {
          ...exitingItem,
          amount: exitingItem.amount + 1,
        };
        updatedItems = [...state.items];

        updatedItems[exitingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload.newItem);
      }
      // console.log(action.payload.enterAmountNum);
      /**
       * totalQuantity 總共 * 件
       */
      // console.log(updatedAmountNum);
      // console.log(state.totalQuantity);
      // console.log(action.payload.enterAmountNum);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalQuantity: updatedTotalQuantity,
      };
    },
    decreaseCartItem: (state, action) => {
      console.log(state);
      console.log(action.payload.amount);
    },

    removeItemFromCart: (state, action) => {
      const id = action.payload;

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

export const { addToCart, removeItemFromCart, clearItem, decreaseCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;

/*************************************************/
