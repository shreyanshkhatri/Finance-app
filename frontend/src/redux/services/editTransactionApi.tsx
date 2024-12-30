import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const editTransactionApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: (builder) => ({
    editTransactionApi: builder.mutation({
      query: ({ userId, transactionId, transactionFormData }) => ({
        url: `/editTransaction/${userId}/${transactionId}`,
        method: "PUT",
        body: transactionFormData,
      }),
    }),
  }),
});

export const { useEditTransactionApiMutation } = editTransactionApi;
