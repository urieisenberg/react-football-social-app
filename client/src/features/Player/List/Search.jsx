import { useSearchParams, useParams } from "react-router-dom";
import { useSearchPlayersQuery } from "../../../store/api/playerSlice";
import Players from "../Style";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";
import Card from "../../../components/Card/Card";
import TopButton from "../../../components/Button/TopButton";

const Search = () => {
  const { leagueid } = useParams();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");

  const { data, isLoading, isError } = useSearchPlayersQuery({
    league: leagueid,
    search: searchTerm,
  });

  const players = data?.data?.map((player) => player);

  let content;
  if (isLoading) content = <Loader />;
  else if (isError || !players?.length)
    content = <Players>No players found</Players>;
  else
    content = (
      <Transition key="search">
        <Players>
          <Players.Title>Search Results for {searchTerm}</Players.Title>
          <Players.List>
            {players?.map((player) => (
              <Card
                key={player.player.id}
                players={player}
                stats="true"
                team="true"
                player={{
                  id: player.player.id,
                  name: player.player.name,
                  team: players[0]?.statistics?.[0]?.team?.id,
                }}
              />
            ))}
          </Players.List>
          <TopButton />
        </Players>
      </Transition>
    );

  return <section>{content}</section>;
};

export default Search;
