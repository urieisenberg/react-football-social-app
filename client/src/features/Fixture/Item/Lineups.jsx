import { useNavigate } from "react-router-dom";
import Transition from "../../../components/Transition/Transition";
import Fixtures from "../Style";

const Lineups = ({ lineups, playersDataAvailable, teams }) => {
  const navigate = useNavigate();

  return (
    <Transition key="lineups">
      <Fixtures>
        {" "}
        <Fixtures.Events>
          <Fixtures.Events.Event>
            <Fixtures.Events.Player>
              <Fixtures.Fixture.SubTitle> Start XI</Fixtures.Fixture.SubTitle>
              <div
                className={playersDataAvailable && "icon"}
                onClick={() => {
                  navigate(`/team/${teams.home.id}/${teams.home.name}/coach`);
                }}
              >
                Coach: {lineups?.[0]?.coach?.name}
              </div>
              {lineups?.[0]?.startXI?.map((player) => (
                <div
                  key={player?.player?.id}
                  className={playersDataAvailable && "icon"}
                  onClick={() =>
                    playersDataAvailable &&
                    navigate(
                      `/team/${teams?.home?.id}/${teams?.home?.name}/players/${player?.player?.id}`
                    )
                  }
                >
                  {player?.player?.name}
                </div>
              ))}{" "}
              <Fixtures.Events.HR />
              <Fixtures.Fixture.SubTitle>
                {" "}
                Substitutes{" "}
              </Fixtures.Fixture.SubTitle>
              {lineups?.[0]?.substitutes?.map((player) => (
                <div
                  key={player?.player?.id}
                  className={playersDataAvailable && "icon"}
                  onClick={() =>
                    playersDataAvailable &&
                    navigate(
                      `/team/${teams?.home?.id}/${teams?.home?.name}/players/${player?.player?.id}`
                    )
                  }
                >
                  {player?.player?.name}
                </div>
              ))}
            </Fixtures.Events.Player>
          </Fixtures.Events.Event>
          <Fixtures.Events.Event></Fixtures.Events.Event>
          <Fixtures.Events.Player>
            <Fixtures.Fixture.SubTitle> Start XI</Fixtures.Fixture.SubTitle>
            <div
              className={playersDataAvailable && "icon"}
              onClick={() => {
                navigate(`/team/${teams.away.id}/${teams.away.name}/coach`);
              }}
            >
              Coach: {lineups?.[1]?.coach?.name}
            </div>
            {lineups?.[1]?.startXI?.map((player) => (
              <div
                key={player?.player?.id}
                className={playersDataAvailable && "icon"}
                onClick={() =>
                  playersDataAvailable &&
                  navigate(
                    `/team/${teams?.away?.id}/${teams?.away?.name}/players/${player?.player?.id}`
                  )
                }
              >
                {player?.player?.name}
              </div>
            ))}{" "}
            <Fixtures.Events.HR />
            <Fixtures.Fixture.SubTitle> Substitutes </Fixtures.Fixture.SubTitle>
            {lineups?.[1]?.substitutes?.map((player) => (
              <div
                key={player?.player?.id}
                className={playersDataAvailable && "icon"}
                onClick={() =>
                  playersDataAvailable &&
                  navigate(
                    `/team/${teams?.away?.id}/${teams?.away?.name}/players/${player?.player?.id}`
                  )
                }
              >
                {player?.player?.name}
              </div>
            ))}
          </Fixtures.Events.Player>
        </Fixtures.Events>
      </Fixtures>
    </Transition>
  );
};
export default Lineups;
