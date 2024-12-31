import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deleteTransactionApi = createApi({
  reducerPath: "deleteTransactionApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: (builder) => ({
    deleteTransactionApi: builder.mutation({
      query: ({ userId, transactionId }) => ({
        url: `/deleteTransaction/${userId}/${transactionId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useDeleteTransactionApiMutation } = deleteTransactionApi;
