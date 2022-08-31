import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  useGetCurrentRoundQuery,
  useGetCurrentFixturesQuery,
} from "../../../store/api/fixtureSlice";
import Countdown from "../Countdown/Countdown";
import Fixtures from "../Style";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";
import TopButton from "../../../components/Button/TopButton";

const Round = () => {
  const { leagueid } = useParams();
  const navigate = useNavigate();

  const { data: currentRound } = useGetCurrentRoundQuery(leagueid);

  const lastRound = currentRound?.data?.slice(-1)[0] - 1;

  const { pathname } = useLocation();

  const round = pathname.includes("next")
    ? currentRound?.data
    : currentRound?.data?.slice(0, -1) + lastRound;

  const { data, isSuccess, isLoading } = useGetCurrentFixturesQuery({
    leagueid: leagueid,
    round: round,
  });

  let content;
  if (isLoading) content = <Loader />;
  else if (!data?.data) content = <Fixtures>No fixtures found</Fixtures>;
  else if (isSuccess && data?.data)
    content = (
      <>
        <Fixtures>
          <Fixtures.Fixture>
            <Fixtures.Fixture.Title>{round}</Fixtures.Fixture.Title>
            {data?.data?.map((fixture) => (
              <Transition key={fixture?.fixture?.id}>
                <Fixtures.Fixture>
                  <Fixtures.Fixture.League>
                    {fixture?.league?.name + " " + fixture?.league?.round}
                  </Fixtures.Fixture.League>
                  <Fixtures.Fixture.Date>
                    {new Date(fixture?.fixture?.date).toLocaleString()}
                  </Fixtures.Fixture.Date>
                  <Fixtures.Fixture.Content>
                    <Fixtures.Fixture.Venue
                      onClick={() =>
                        navigate(
                          `/league/${leagueid}/stadiums/${fixture?.fixture?.venue?.id}`
                        )
                      }
                    >
                      {fixture?.fixture?.venue?.name +
                        " " +
                        fixture?.fixture?.venue?.city}
                    </Fixtures.Fixture.Venue>
                  </Fixtures.Fixture.Content>
                  <Fixtures.Fixture.Content>
                    <Fixtures.Fixture.Team>
                      <Fixtures.Fixture.Team.Home
                        onClick={() =>
                          navigate(
                            `/team/${fixture?.teams?.home?.id}/${fixture?.teams?.home?.name}`
                          )
                        }
                      >
                        <Fixtures.Fixture.Team.Logo
                          src={fixture?.teams?.home?.logo}
                          alt={fixture?.teams?.home?.name}
                        />

                        <Fixtures.Fixture.BR />
                        {fixture?.teams?.home?.name}
                      </Fixtures.Fixture.Team.Home>
                    </Fixtures.Fixture.Team>
                    <Fixtures.Fixture.Score>
                      {(fixture?.fixture?.status?.short === "NS") |
                      (fixture?.fixture?.status?.short === "TBD") ? (
                        <Countdown gameDate={fixture?.fixture?.date} />
                      ) : (
                        <>
                          <Fixtures.Fixture.Score.Goals>
                            {fixture?.goals?.home} : {fixture?.goals?.away}
                          </Fixtures.Fixture.Score.Goals>
                        </>
                      )}
                    </Fixtures.Fixture.Score>
                    <Fixtures.Fixture.Team>
                      <Fixtures.Fixture.Team.Away
                        onClick={() =>
                          navigate(
                            `/team/${fixture?.teams?.away?.id}/${fixture?.teams?.away?.name}`
                          )
                        }
                      >
                        <Fixtures.Fixture.Team.Logo
                          src={fixture?.teams?.away?.logo}
                          alt={fixture?.teams?.away?.name}
                        />
                        <Fixtures.Fixture.BR />
                        {fixture?.teams?.away?.name}
                      </Fixtures.Fixture.Team.Away>
                    </Fixtures.Fixture.Team>
                  </Fixtures.Fixture.Content>
                  <Fixtures.Fixture.GameZone
                    onClick={() =>
                      navigate(
                        `/league/${
                          leagueid + "/fixtures/" + fixture?.fixture?.id
                        }`
                      )
                    }
                  >
                    Check Out Game Zone
                  </Fixtures.Fixture.GameZone>
                  <Fixtures.Fixture.H2H
                    onClick={() =>
                      navigate(
                        `/league/${
                          leagueid +
                          "/fixtures/" +
                          fixture?.teams?.home?.id +
                          "-" +
                          fixture?.teams?.away?.id +
                          "/" +
                          fixture?.teams?.home?.name +
                          "/" +
                          fixture?.teams?.away?.name
                        }`
                      )
                    }
                  >
                    see more games between {fixture?.teams?.home?.name} and{" "}
                    {fixture?.teams?.away?.name}
                  </Fixtures.Fixture.H2H>
                  <Fixtures.Fixture.HR />
                </Fixtures.Fixture>
              </Transition>
            ))}
          </Fixtures.Fixture>
        </Fixtures>
        <TopButton />
      </>
    );
  else content = <Loader />;

  return <section>{content}</section>;
};

export default Round;
