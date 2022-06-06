import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cart-slice";
import commodityReducer from "../slices/commodity-slice";
import authReducer from "../slices/auth-slice";
import { combineReducers } from "redux";
import userInfoReducer from "../slices/ShippingInfo-slice";
import { userApiService } from "../services/authApi";

const reducers = combineReducers({
  cartReducer,
  commodityReducer,
  authReducer,
  userInfoReducer,
  [userApiService.reducerPath]: userApiService.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApiService.middleware);
  },
});

export default store;
