import { apiFootballSlice } from "./apiFootballSlice";

export const playerSlice = apiFootballSlice.injectEndpoints({
  reducerPath: "players",
  endpoints: (builder) => ({
    getTeamPlayers: builder.query({
      query: (teamId) => ({
        url: `players/squads?team=${teamId}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response[0],
        };
      },
    }),
    searchPlayers: builder.query({
      query: ({ league, search }) => ({
        url: `players?league=${league}&search=${search}&season=2022`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response,
        };
      },
    }),
    getTopScorers: builder.query({
      query: ({ league, season }) => ({
        url: `players/topscorers?league=${league}&season=${season}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg.league + "-scorers",
          data: response,
        };
      },
    }),
    getTopAssists: builder.query({
      query: ({ league, season }) => ({
        url: `players/topassists?league=${league}&season=${season}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg + "-assists",
          data: response,
        };
      },
    }),
    getTopRedCards: builder.query({
      query: ({ league, season }) => ({
        url: `players/topredcards?league=${league}&season=${season}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg + "-redcards",
          data: response,
        };
      },
    }),
    getTopYellowCards: builder.query({
      query: ({ league, season }) => ({
        url: `players/topyellowcards?league=${league}&season=${season}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg + "-yellowcards",
          data: response,
        };
      },
    }),
    getPlayer: builder.query({
      query: ({ playerid, teamid }) => ({
        url: `players?id=${playerid}&team=${teamid}&season=2022`,
      }),
      transformResponse: (response, meta, arg) => {
        const player = response[0]?.player;
        const playerStats = response[0]?.statistics?.map((stat) => stat);
        return {
          id: arg,
          data: {
            player: player,
            playerStats: playerStats,
          },
        };
      },
    }),
    getPlayerTrophies: builder.query({
      query: (playerid) => ({
        url: `trophies?player=${playerid}`,
      }),
      transformResponse: (response, meta, arg) => {
        return {
          id: arg,
          data: response,
        };
      },
    }),
    getTeamPlayersInjuries: builder.query({
      query: (teamid) => ({
        url: `injuries?season=2022&team=${teamid}`,
      }),
      transformResponse: (response, meta, arg) => {
        let currentInjuriesPlayers = [];
        const currentInjuries = response.filter((injury) => {
          const isDuplicate = currentInjuriesPlayers.includes(injury.player.id);
          if (!isDuplicate) {
            currentInjuriesPlayers.push(injury.player.id);
            return true;
          }
          return false;
        });
        return {
          id: arg,
          data: currentInjuries,
        };
      },
    }),
  }),
});

export const {
  useGetTeamPlayersQuery,
  useSearchPlayersQuery,
  useGetTopScorersQuery,
  useGetTopAssistsQuery,
  useGetTopRedCardsQuery,
  useGetTopYellowCardsQuery,
  useGetPlayerQuery,
  useGetPlayerTrophiesQuery,
  useGetTeamPlayersInjuriesQuery,
} = playerSlice;
