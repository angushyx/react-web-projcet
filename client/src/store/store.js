import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cart-slice";
import commodityReducer from "../slices/commodity-slice";
import authReducer from "../slices/auth-slice";
import { combineReducers } from "redux";
import userInfoReducer from "../slices/ShippingInfo-slice";

const reducers = combineReducers({
  cartReducer,
  commodityReducer,
  authReducer,
  userInfoReducer,
});

const store = configureStore({
  reducer: reducers,
  // //思考看看有沒有需要寫 middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["your/action/type"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
});

export default store;
