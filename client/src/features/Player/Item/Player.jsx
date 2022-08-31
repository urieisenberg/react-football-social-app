import { useParams, useNavigate } from "react-router-dom";
import { useGetPlayerQuery } from "../../../store/api/playerSlice";
import Statistics from "./Statistics";
import Trophies from "./Trophies";
import Players from "../Style";
import Loader from "../../../components/Loader/Loader";
import Transition from "../../../components/Transition/Transition";

const Player = () => {
  const { teamid, playerid } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isSuccess, isError } = useGetPlayerQuery({
    teamid: teamid,
    playerid: playerid,
  });

  const player = data?.data?.player;
  const playerStats = data?.data?.playerStats;


  let content;
  if (isLoading) content = <Loader />;
  else if (isError || !player || !playerStats)
    content = <Players>No Player Data Found</Players>;
  else if (isSuccess)
    content = (
      <>
        <Transition key="player">
          <Players>
            <Players.Title>
              {player?.firstname + " " + player.lastname}f
            </Players.Title>
            <Players.Img src={player?.photo} alt={player?.name} />

            <Players.Player>
              <Players.Item>
                {" "}
                Team:{" "}
                <Players.Team
                  onClick={() =>
                    navigate(
                      `/team/${
                        playerStats[0]?.team?.id + playerStats[0]?.team?.name
                      }`
                    )
                  }
                >
                  {playerStats[0]?.team?.name}
                </Players.Team>
              </Players.Item>
              <Players.Item>Age: {player?.age}</Players.Item>
              <Players.Item>Height: {player?.height}</Players.Item>
              <Players.Item>Weight: {player?.weight}</Players.Item>{" "}
            </Players.Player>
            <Players.Player>
              <Players.Item>Born: {player?.birth?.date}</Players.Item>
              <Players.Item>City: {player?.birth?.place}</Players.Item>
              <Players.Item>Country: {player?.birth?.country}</Players.Item>
              <Players.Item>Nationality {player?.nationality}</Players.Item>
            </Players.Player>
          </Players>
        </Transition>
        <Statistics
          stats={{
            league: playerStats[0],
            cup: playerStats[1],
            player: player,
          }}
        />
        <Trophies player={player?.name} />
      </>
    );

  return <section>{content}</section>;
};

export default Player;
