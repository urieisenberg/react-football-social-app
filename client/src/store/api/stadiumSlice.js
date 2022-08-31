import { apiFootballSlice } from "./apiFootballSlice";

export const stadiumSlice = apiFootballSlice.injectEndpoints({
  reducerPath: "league",
  endpoints: (builder) => ({
    searchStadiums: builder.query({
      query: (search) => ({
        url: `venues?search=${search}`,
      }),

      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response
            .map((item) => item)
            .filter((item) => item.country === "Italy"),
        };
      },
    }),
    getStadiums: builder.query({
      query: ({country}) => ({
        url: `venues?country=${country}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response
            .map((item) => item)
            .filter((item) => item.capacity > 10000),
        };
      },
    }),
    getStadium: builder.query({
      query: (stadiumid) => ({
        url: `venues?id=${stadiumid}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response[0],
        };
      },
    }),
  }),
});

export const {
  useSearchStadiumsQuery,
  useGetStadiumsQuery,
  useGetStadiumQuery,
} = stadiumSlice;
