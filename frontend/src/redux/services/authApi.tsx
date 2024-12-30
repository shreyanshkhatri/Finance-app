import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../utils/interfaces/interface";
const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BACKEND_URL}/user`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<User, { email: string; password: string }>({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
    signup: builder.mutation<
      User,
      { name: string; email: string; password: string }
    >({
      query: (newUser) => ({
        url: "/register",
        method: "POST",
        body: newUser,
        headers: config.headers,
      }),
    }),
  }),
});
export const { useLoginMutation, useSignupMutation } = authApi;
