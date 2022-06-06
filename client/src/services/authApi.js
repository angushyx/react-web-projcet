import { createApi } from "@reduxjs/toolkit/query/react";

import axios from "axios";

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

// Define a service using a base URL and expected endpoints
export const userApiService = createApi({
  reducerPath: "userApi",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:8080/api/" }),

  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: (name, email, password, role) => ({
        method: "POST",
        url: `users/signup`,
        data: { name, email, password, role },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserMutation } = userApiService;

// import axios from "axios";
// const APL_URL = "http://localhost:8080/api/users";

// class AuthService {
//   signup(name, email, password, role) {
//     return axios.post(APL_URL + "/signup", {
//       name,
//       email,
//       password,
//       role,
//     });
//   }
// }

// export default new AuthService();
