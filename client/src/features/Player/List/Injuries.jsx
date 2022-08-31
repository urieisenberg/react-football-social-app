import { useParams } from "react-router-dom";
import { useGetTeamPlayersInjuriesQuery } from "../../../store/api/playerSlice";
import Players from "../Style";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";
import Card from "../../../components/Card/Card";
import TopButton from "../../../components/Button/TopButton";

const Injuries = () => {
  const { teamid } = useParams();

  const { data, isLoading, isSuccess } = useGetTeamPlayersInjuriesQuery(teamid);

  let content;
  if (isLoading) content = <Loader />;
  else if (!data?.data?.length) content = <Players>No Injuries found</Players>;
  else if (isSuccess)
    content = (
      <Transition key="teamInjuries">
        <Players>
          <Players.List>
            {data?.data?.map((player) => (
              <Card
                key={player?.fixture?.date + player?.player?.name}
                players={player}
              />
            ))}
          </Players.List>
          {data?.data?.length > 10 && <TopButton />}
        </Players>
      </Transition>
    );

  return <section>{content}</section>;
};

export default Injuries;
