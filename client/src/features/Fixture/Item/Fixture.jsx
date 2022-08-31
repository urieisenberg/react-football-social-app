import { useParams, useNavigate } from "react-router-dom";
import { useGetFixtureQuery } from "../../../store/api/fixtureSlice";
import { useToggle } from "../../../hooks/useToggle";
import Save from "./Save";
import Lineups from "./Lineups";
import Events from "./Events";
import Statistics from "./Statistics";
import Players from "./Players";
import Countdown from "../Countdown/Countdown";
import Fixtures from "../Style";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";

const Fixture = ({ path }) => {
  const [showPlayers, setShowPlayers] = useToggle(true);
  const { teamid, leagueid, teamname, fixture } = useParams();
  const navigate = useNavigate();

  const { data, isSuccess, isLoading, isFetching, isError } =
    useGetFixtureQuery(fixture);

  let homeEvents = data?.data?.events?.home;
  let awayEvents = data?.data?.events?.away;
  const teams = data?.data?.teams;
  let fixtureData = data?.data?.game;

  const allowNavigateToPlayer = data?.data?.playersDataAvailable;

  const handleNavToGameZone = (head2head) => {
    let link;
    path === "team"
      ? (link = `/team/${teamid}/${teamname}/fixtures/`)
      : (link = `/league/${leagueid}/fixtures/`);
    navigate(link + head2head);
  };

  let content;
  if (isLoading || !fixtureData || isFetching || isError) content = <Loader />;
  else if (isSuccess && fixtureData)
    content = (
      <Fixtures>
        <Transition key="fixture">
          <Save
            fixture={{
              id: fixture,
              date: fixtureData?.fixture?.date,
              league: {
                logo: fixtureData?.league?.logo,
                id: fixtureData?.league?.id,
              },
              home: {
                logo: teams?.home?.logo,
                name: teams?.home?.name,
              },
              away: {
                logo: teams?.away?.logo,
                name: teams?.away?.name,
              },
            }}
          />
          <Fixtures.Fixture.League>
            {fixtureData?.league?.name + " " + fixtureData?.league?.round}
          </Fixtures.Fixture.League>
          <Fixtures.Fixture.Date>
            {new Date(fixtureData?.fixture?.date).toLocaleString()}
          </Fixtures.Fixture.Date>{" "}
          <Fixtures.Fixture.Referee>
            Referee: {fixtureData?.fixture?.referee || "N/A"}
          </Fixtures.Fixture.Referee>
          <Fixtures.Fixture.Content>
            <Fixtures.Fixture.Venue
              onClick={() =>
                navigate(
                  `/league/${fixtureData?.league?.id}/stadiums/${fixtureData?.fixture?.venue?.id}`
                )
              }
            >
              {fixtureData?.fixture?.venue?.name +
                " " +
                fixtureData?.fixture?.venue?.city}
            </Fixtures.Fixture.Venue>
          </Fixtures.Fixture.Content>
          <Fixtures.Fixture>
            <Fixtures.Fixture.Content>
              <Fixtures.Fixture.Team>
                <Fixtures.Fixture.Team.Home
                  onClick={() =>
                    navigate(`/team/${teams?.home?.id}/${teams?.home?.name}`)
                  }
                >
                  <Fixtures.Fixture.Team.Logo
                    src={teams?.home?.logo}
                    alt={teams?.home?.name}
                  />
                  <Fixtures.Fixture.BR />
                  {teams?.home?.name}
                </Fixtures.Fixture.Team.Home>
              </Fixtures.Fixture.Team>
              <Fixtures.Fixture.Score>
                {(fixtureData?.fixture?.status?.short === "NS") |
                (fixtureData?.fixture?.status?.short === "TBD") ? (
                  <Countdown gameDate={fixtureData?.fixture?.date} />
                ) : (
                  <Fixtures.Fixture.Score.Goals>
                    {fixtureData?.goals?.home +
                      " : " +
                      fixtureData?.goals?.away}
                  </Fixtures.Fixture.Score.Goals>
                )}
              </Fixtures.Fixture.Score>
              <Fixtures.Fixture.Team>
                <Fixtures.Fixture.Team.Away
                  onClick={() =>
                    navigate(`/team/${teams?.away?.id}/${teams?.away?.name}`)
                  }
                >
                  <Fixtures.Fixture.Team.Logo
                    src={teams?.away?.logo}
                    alt={teams?.away?.name}
                  />{" "}
                  <Fixtures.Fixture.BR />
                  {teams?.away?.name}
                </Fixtures.Fixture.Team.Away>
              </Fixtures.Fixture.Team>
            </Fixtures.Fixture.Content>
            <Fixtures.Fixture.H2H
              onClick={() =>
                handleNavToGameZone(
                  `${
                    teams?.home?.id +
                    "-" +
                    teams?.away?.id +
                    "/" +
                    teams?.home?.name +
                    "/" +
                    teams?.away?.name
                  }`
                )
              }
            >
              see more games between {teams?.home?.name} and {teams?.away?.name}
            </Fixtures.Fixture.H2H>
            <Events
              homeEvents={homeEvents}
              awayEvents={awayEvents}
              playersDataAvailable={allowNavigateToPlayer}
            />
            {data?.data?.lineups?.length > 0 && (
              <Fixtures.Fixture.Content>
                {" "}
                <Fixtures.Fixture.HR />
                <Fixtures.Fixture.Title>Players</Fixtures.Fixture.Title>
                <Fixtures.Fixture.SubTitle
                  className="icon"
                  onClick={() => setShowPlayers()}
                >
                  Statistics
                </Fixtures.Fixture.SubTitle>
                {showPlayers ? (
                  <Players
                    playersDataAvailable={allowNavigateToPlayer}
                    teams={{
                      home: teams?.home,
                      away: teams?.away,
                    }}
                  />
                ) : (
                  <Lineups
                    lineups={data?.data?.lineups}
                    playersDataAvailable={allowNavigateToPlayer}
                    teams={{
                      home: teams?.home,
                      away: teams?.away,
                    }}
                  />
                )}
              </Fixtures.Fixture.Content>
            )}
            <Statistics />
          </Fixtures.Fixture>
        </Transition>
      </Fixtures>
    );

  return <section>{content}</section>;
};

export default Fixture;
