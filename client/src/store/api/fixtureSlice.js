import { apiFootballSlice } from "./apiFootballSlice";

export const fixtureSlice = apiFootballSlice.injectEndpoints({
  reducerPath: "fixture",
  endpoints: (builder) => ({
    getCurrentRound: builder.query({
      query: (leagueid) => ({
        url: `fixtures/rounds?league=${leagueid}&season=2022&current=true`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response[0],
        };
      },
    }),
    getCurrentFixtures: builder.query({
      query: ({ leagueid, round }) => ({
        url: `fixtures?league=${leagueid}&season=2022&round=${round}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response,
        };
      },
    }),
    getPlayers: builder.query({
      query: (fixture) => ({
        url: `fixtures/players?fixture=${fixture}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response,
        };
      },
    }),
    getTeamNextOne: builder.query({
      query: (teamid) => ({
        url: `fixtures?season=2022&team=${teamid}&next=1`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response,
        };
      },
    }),
    getTeamLastOne: builder.query({
      query: (teamid) => ({
        url: `fixtures?season=2022&team=${teamid}&last=1`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response,
        };
      },
    }),
    getAllTeamNext: builder.query({
      query: (teamid) => ({
        url: `fixtures?season=2022&team=${teamid}&next=50`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response,
        };
      },
    }),
    getAllTeamPrevious: builder.query({
      query: (teamid) => ({
        url: `fixtures?season=2022&team=${teamid}&status=ft&from=2022-08-13&to=${new Date()
          .toISOString()
          .slice(0, 10)}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response,
        };
      },
    }),
    getStatistics: builder.query({
      query: (fixture) => ({
        url: `fixtures/statistics?fixture=${fixture}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response,
        };
      },
    }),
    getFixture: builder.query({
      query: (fixture) => ({
        url: `fixtures?id=${fixture}`,
      }),
      transformResponse: (response, meta, arg) => {
        let goals = response[0]?.events?.filter((event) => event?.type === "Goal");
        let redcards = response[0]?.events?.filter(
          (event) => event?.detail === "Red Card"
        );
        const events = goals?.concat(redcards);

        const awayEvents = events
          ?.filter((event) => event?.team?.id == response[0].teams?.away?.id)
          .sort((a, b) => a?.time?.elapsed - b?.time?.elapsed);

        const homeEvents = events
          ?.filter((event) => event?.team?.id == response[0].teams?.home?.id)
          .sort((a, b) => a?.time?.elapsed - b?.time?.elapsed);

        const playersDataAvaialabe =
          response[0].fixture?.date?.includes("2022");

        return {
          id: arg,
          data: {
            game: response[0],
            lineups: response[0].lineups,
            teams: {
              home: response[0].teams.home,
              away: response[0].teams.away,
            },
            events: {
              away: awayEvents,
              home: homeEvents,
            },
            playersDataAvailable: playersDataAvaialabe,
          },
        };
      },
    }),

    getHeadToHead: builder.query({
      query: (teamsid) => ({
        url: `fixtures/headtohead?h2h=${teamsid}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response,
        };
      },
    }),
  }),
});

export const {
  useGetCurrentRoundQuery,
  useGetCurrentFixturesQuery,
  useGetPlayersQuery,
  useGetTeamNextOneQuery,
  useGetTeamLastOneQuery,
  useGetAllTeamNextQuery,
  useGetAllTeamPreviousQuery,
  useGetStatisticsQuery,
  useGetFixtureQuery,
  useGetHeadToHeadQuery,
} = fixtureSlice;
