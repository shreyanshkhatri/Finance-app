import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  SaveExcelDataRequest,
  SaveExcelDataResponse,
} from "../../utils/interfaces/interface";

const saveExcelApi = createApi({
  reducerPath: "saveExcelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BACKEND_URL}`,
  }),
  endpoints: (builder) => ({
    saveExcelData: builder.mutation<
      SaveExcelDataResponse,
      SaveExcelDataRequest
    >({
      query: ({ excelData, selectedCategories, userId }) => ({
        url: "/saveExcelData",
        method: "POST",
        body: {
          excelData,
          selectedCategories,
          userId,
        },
      }),
    }),
  }),
});

export const { useSaveExcelDataMutation } = saveExcelApi;

export default saveExcelApi;
