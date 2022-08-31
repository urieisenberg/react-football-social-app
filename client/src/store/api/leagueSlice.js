import { apiFootballSlice } from "./apiFootballSlice";

export const leagueSlice = apiFootballSlice.injectEndpoints({
  reducerPath: "league",
  endpoints: (builder) => ({
    getTable: builder.query({
      query: (leagueid) => ({
        url: `standings?league=${leagueid}&season=2022`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response[0],
        };
      },
    }),
    getLeague: builder.query({
      query: (teamid) => ({
        url: `leagues?team=${teamid}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response[0],
        };
      },
    }),
    getInfo: builder.query({
      query: (leagueid) => ({
        url: `leagues?id=${leagueid}`,
      }),

      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response[0],
        };
      },
    }),
    getCurrentLeague: builder.query({
      query: (teamid) => ({
        url: `leagues?season=2022&team=${teamid}&type=league`,
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

export const { useGetTableQuery, useGetInfoQuery, useGetLeagueQuery, useGetCurrentLeagueQuery } =
  leagueSlice;
