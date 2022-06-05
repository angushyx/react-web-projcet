import axios from "axios";
// const baseURL = "http://localhost:8080/";
// const cartURL = `${baseURL}/cart`;// //config a instance
// const axiosInstance = axios.create({
//   baseURL,
// });
const API = axios.create({ baseURL: "http://localhost:8080" });

export const getCartItem = () => API.get("/carts");
export const addItemToCart = (newCartItem) => API.post("cart", newCartItem);
export const increaseCartItem = (id) =>
  API.patch(`cart/${id}`, increaseCartItem);
export const decreaseCartItem = (id) =>
  API.patch(`cart/${id}`, decreaseCartItem);
export const deleteCartItem = (id) => API.delete(`cart/${id}`);
