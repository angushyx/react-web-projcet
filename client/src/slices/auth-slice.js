import { createSlice } from "@reduxjs/toolkit";
// import { useState, useEffect, useCallback } from "react";

let logoutTimer;
const initialState = {
  googleUserData: {},
  userData: {},
  token: "",
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action) => {
      const newGoogleUserData = action?.payload;
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return {
        googleUserData: newGoogleUserData,
      };
    },
  },
});

export const { auth } = authSlice.actions;
export default authSlice.reducer;

// // /***************  Helper func    *******************/
// /**
//  * Helper func 計算在網站中剩餘停留的時間
//  * @param {Number} expirationTime
//  * @returns 登入剩餘時間
//  */
// const calculateRemainingTime = (expirationTime) => {
//   const currentTime = new Date().getTime();
//   const adjExpirationTime = new Date(expirationTime).getTime();

//   const remainingDuration = adjExpirationTime - currentTime;

//   return remainingDuration;
// };

// /**
//  * 從 localStorage 中拿 token和過期時間，並在 10 分鐘後自動remove
//  * @returns token、 duration
//  */
// const retrieveStoredToken = () => {
//   const storeToken = localStorage.getItem("token");
//   const storeExpirationDate = localStorage.getItem("expirationTime");

//   const remainingTime = calculateRemainingTime(storeExpirationDate);

//   if (remainingTime <= 60000) {
//     localStorage.removeItem("token");
//     localStorage.removeItem("expirationTime");
//     return null;
//   }

//   return {
//     token: storeToken,
//     duration: remainingTime,
//   };
// };

// /******************************************
//  ********************************************/

// /**
//  *
//  * @returns token、
//  */
// export const AuthValue = () => {
//   const tokenData = retrieveStoredToken();
//   let initialToken;
//   if (tokenData) {
//     initialToken = tokenData.token;
//   }
//   const [token, setToken] = useState(initialToken);
//   const userIsLoggedIn = !!token;

//   const logoutHandler = useCallback(() => {
//     setToken(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("expirationTime");

//     if (logoutTimer) {
//       clearTimeout(logoutTimer);
//     }
//   }, []);

//   /**
//    * 以 JWT 的方式登入
//    * @param {String} token
//    * @param {String} expirationTime
//    */
//   const loginHandler = (token, expirationTime) => {
//     setToken(token);
//     //把 token 加入 localStorage 的 item 裡
//     localStorage.setItem("token", token);
//     //把 expirationTime 加入 localStorage 的 item 裡
//     localStorage.setItem("expirationTime", expirationTime);

//     const remainingTime = calculateRemainingTime(expirationTime);

//     logoutTimer = setTimeout(logoutHandler, remainingTime);
//   };

//   useEffect(() => {
//     if (tokenData) {
//       logoutTimer = setTimeout(logoutHandler, tokenData.duration);
//     }
//   }, [tokenData]);

//   return (initialState = {
//     token: token,
//     isLoggedIn: userIsLoggedIn,
//     login: loginHandler,
//     logout: logoutHandler,
//   });
// };
