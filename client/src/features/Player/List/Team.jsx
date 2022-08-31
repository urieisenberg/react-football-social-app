import { useParams } from "react-router-dom";
import { useGetTeamPlayersQuery } from "../../../store/api/playerSlice";
import Players from "../Style";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";
import Card from "../../../components/Card/Card";
import TopButton from "../../../components/Button/TopButton";

const Team = () => {
  const { teamid } = useParams();

  const { data, isLoading, isSuccess } = useGetTeamPlayersQuery(teamid);

  let content;
  if (isLoading) content = <Loader />;
  else if (isSuccess && data?.data)
    content = (
      <Transition key="teamPLayers">
        <Players>
          <Players.List>
            {data?.data?.players?.map((player) => (
              <Card
                key={player?.id}
                players={player}
               
                player={{
                  id: player?.id,
                  name: player?.name,
                  team: teamid,
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

export default Team;
