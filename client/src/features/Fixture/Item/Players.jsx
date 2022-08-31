import { useParams, useNavigate } from "react-router-dom";
import { useGetPlayersQuery } from "../../../store/api/fixtureSlice";
import Fixtures from "../Style";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { GiSoccerBall } from "react-icons/gi";
import Transition from "../../../components/Transition/Transition";

const Players = ({ teams, playersDataAvailable }) => {
  const { fixture } = useParams();
  const navigate = useNavigate();

  const { data, isError } = useGetPlayersQuery(fixture);

  let content;
  if (!data?.data?.length || isError) content = null;
  else
    content = (
      <Transition key="playersFixtures">
        <Fixtures>
          <Fixtures.Events>
            <Fixtures.Events.Event>
              {data?.data[0]?.players
                ?.map((player) => (
                  <Fixtures.Events.Player
                    key={player?.player?.id}
                    className={playersDataAvailable && "icon"}
                    onClick={() =>
                      playersDataAvailable &&
                      navigate(
                        `/team/${teams?.home?.id}/${teams?.home?.name}/players/${player?.player?.id}                    `
                      )
                    }
                  >
                    {" "}
                    {player?.statistics?.[0]?.games?.rating !== null && (
                      <Fixtures.Events.Rating>
                        {player?.statistics?.[0]?.games?.rating}
                      </Fixtures.Events.Rating>
                    )}
                    {player?.player?.name}{" "}
                    {player?.statistics?.[0]?.games?.substitute === true && (
                      <HiOutlineSwitchHorizontal />
                    )}
                    {player?.statistics?.[0]?.cards?.yellow > 0 && <>🟨</>}{" "}
                    {player?.statistics?.[0]?.cards?.red === 1 && <>🟥</>}{" "}
                    {player?.statistics?.[0]?.goals?.total > 0 && (
                      <GiSoccerBall />
                    )}
                  </Fixtures.Events.Player>
                ))
                .filter(
                  (player) => player?.statistics?.[0]?.games?.minutes !== null
                )}
            </Fixtures.Events.Event>
            <Fixtures.Events.Event></Fixtures.Events.Event>
            <Fixtures.Events.Event>
              {data?.data[1]?.players
                ?.map((player) => (
                  <Fixtures.Events.Player
                    key={player?.player?.id}
                    className={playersDataAvailable && "icon"}
                    onClick={() =>
                      playersDataAvailable &&
                      navigate(`/team/${teams?.away?.id}/${teams?.away?.name}/players/${player?.player?.id}
                    `)
                    }
                  >
                    {player?.statistics?.[0]?.games?.rating !== null && (
                      <Fixtures.Events.Rating>
                        {player?.statistics?.[0]?.games?.rating}
                      </Fixtures.Events.Rating>
                    )}
                    {player?.player?.name}{" "}
                    {player?.statistics?.[0]?.games?.substitute === true && (
                      <HiOutlineSwitchHorizontal />
                    )}
                    {player?.statistics?.[0]?.cards?.yellow > 0 && <>🟨</>}{" "}
                    {player?.statistics?.[0]?.cards?.red === 1 && <>🟥</>}{" "}
                    {player?.statistics?.[0]?.goals?.total > 0 && (
                      <GiSoccerBall />
                    )}
                  </Fixtures.Events.Player>
                ))

                .filter(
                  (player) => player?.statistics?.[0]?.games?.minutes !== null
                )}
            </Fixtures.Events.Event>
          </Fixtures.Events>
        </Fixtures>
      </Transition>
    );
  return <section>{content}</section>;
};

export default Players;
