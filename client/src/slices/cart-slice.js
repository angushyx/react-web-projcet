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
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalQuantity: updatedTotalQuantity,
      };
    },
    decreaseCartItem: (state, action) => {
      let updatedItems;
      /**
       * 拿 commodity 的 data 來與目前存在於 cart 的 data 比對
       */
      const exitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.newItem.id
      );

      let exitingItem = state.items[exitingItemIndex];
      /**
       * total Amount 為什麼 state.totalAmount 在減最後一次的時候不會變動??
       */
      const updatedTotalAmount =
        state.totalAmount - action.payload.enterItemPrice;

      // console.log(state.totalAmount);
      // console.log(action.payload.enterItemPrice);
      // console.log(updatedTotalAmount);
      /**
       * total quantity
       */
      const updatedTotalQuantity =
        state.totalQuantity -
        (action.payload.enterAmountNum - action.payload.enterAmountNum + 1);

      if (exitingItem.amount > 1) {
        const updatedItem = {
          ...exitingItem,
          amount: exitingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[exitingItemIndex] = updatedItem;
      } else {
        /**
         * 先不刪除
         */
        // updatedItems = state.items.splice(exitingItemIndex, 1);
        return;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalQuantity: updatedTotalQuantity,
      };
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
