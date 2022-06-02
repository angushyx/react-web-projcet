import { createSlice } from "@reduxjs/toolkit";
import { boolean } from "yup/lib/locale";

const initialState = {
  userInfos: [],
  isEditModal: false,
  isShippingPage: boolean,
};

export const ShippingSlice = createSlice({
  name: "ShippingInfo",
  initialState,
  reducers: {
    addNewUserInfo: (state, action) => {
      const newUserInfo = action.payload.values;
      return { userInfos: newUserInfo };
    },
    changePageView: (state, action) => {
      if (action.payload === "/checkout") {
        state.isShippingPage = true;
      } else {
        state.isShippingPage = false;
      }
    },
  },
});

export const { addNewUserInfo, changePageView } = ShippingSlice.actions;

export default ShippingSlice.reducer;
