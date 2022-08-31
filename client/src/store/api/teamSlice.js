import { apiFootballSlice } from "./apiFootballSlice";

export const teamSlice = apiFootballSlice.injectEndpoints({
  reducerPath: "team",
  endpoints: (builder) => ({
    getTeam: builder.query({
      query: (teamid) => ({
        url: `teams?id=${teamid}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response[0],
        };
      },
    }),
    getTeamStatistics: builder.query({
      query: (teamid) => ({
        url: `teams/statistics?league=135&season=2022&team=${teamid}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: {
            biggest: response.biggest,
            cards: response.cards,
            goals: response.goals,
            form: response.form,
            cleanSheet: response.clean_sheet,
            lineups: response.lineups,
            team: response.team,
            league: response.league,
            failed_to_score: response.failed_to_score,
            penalty: response.penalty,
          },
        };
      },
    }),
    getTeamCoach: builder.query({
      query: (teamid) => ({
        url: `coachs?team=${teamid}`,
      }),
      transformResponse: (response, meta, arg) => {
        const currentCoach = response
          .map((coach) => coach)
          .filter((coach) => coach?.team?.id.toString() === arg);

        return {
          id: arg,
          data: currentCoach,
        };
      },
    }),
    getTeamCoachTrophies: builder.query({
      query: (coach) => ({
        url: `trophies?coach=${coach}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response,
        };
      },
    }),
    getTeamTransfers: builder.query({
      query: (teamid) => ({
        url: `transfers?team=${teamid}`,
      }),
      transformResponse: (response, meta, arg) => {
        const players = response
          .map((player) => player)
          .filter((player) => player?.transfers?.[0]?.date?.includes("2022"));

        const arrived = players.filter(
          (player) => player?.transfers?.[0].teams?.in?.id?.toString() === arg
        );
        const left = players.filter(
          (player) => player?.transfers?.[0].teams?.out?.id?.toString() === arg
        );
        return {
          id: arg,
          data: {
            arrived: arrived?.length > 0 ? arrived : "No transfers found",
            left: left?.length > 0 ? left : "No transfers found",
          },
        };
      },
    }),
  }),
});

export const {
  useGetTeamQuery,
  useGetTeamStatisticsQuery,
  useGetTeamCoachQuery,
  useGetTeamCoachTrophiesQuery,
  useGetTeamTransfersQuery,
} = teamSlice;
