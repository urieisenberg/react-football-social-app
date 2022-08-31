import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosConfig";

export const apiFootballSlice = createApi({
  reducerPath: "apiFootball",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({}),
});
