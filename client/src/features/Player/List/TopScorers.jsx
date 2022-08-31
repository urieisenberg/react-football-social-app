import { useParams } from "react-router-dom";
import { useGetTopScorersQuery } from "../../../store/api/playerSlice";
import Players from "../Style";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";
import Card from "../../../components/Card/Card";
import TopButton from "../../../components/Button/TopButton";

const TopScorers = () => {
  const { season, leagueid } = useParams();

  const { data, isLoading } = useGetTopScorersQuery({
    season: season || 2022,
    league: leagueid,
  });

  const players = data?.data?.map((player) => player);

  let content;
  if (isLoading || !players?.length) content = <Loader />;
  else
    content = (
      <Transition key="topscorers">
        <Players>
          <Players.Title>Top Scorers</Players.Title>
          <Players.List>
            {players?.map((player) => (
              <Card key={player?.player?.id} players={player} league="true" />
            ))}
          </Players.List>
          <TopButton />
        </Players>
      </Transition>
    );

  return <section>{content}</section>;
};

export default TopScorers;
