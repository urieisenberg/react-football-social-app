import { useParams, useNavigate } from "react-router-dom";
import { useGetHeadToHeadQuery } from "../../../store/api/fixtureSlice";
import Countdown from "../Countdown/Countdown";
import Fixtures from "../Style";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";
import TopButton from "../../../components/Button/TopButton";

const HeadToHead = ({ path }) => {
  const { teamid, teamname, leagueid, teamsids, teamname1, teamname2 } =
    useParams();
  const navigate = useNavigate();

  const { data, isSuccess, isLoading } = useGetHeadToHeadQuery(teamsids);

  const handleNavToGameZone = (fixtureId) => {
    let link;
    path === "team"
      ? (link = `/team/${teamid}/${teamname}/fixtures/`)
      : (link = `/league/${leagueid}/fixtures/`);
    navigate(link + fixtureId);
  };

  let content;
  if (isLoading) content = <Loader />;
  else if(!data?.data) content = <Fixtures>No fixtures found</Fixtures>;
  else if (isSuccess && data?.data)
    content = (
      <>
        <Fixtures>
          <Fixtures.Fixture.Title>
            {teamname1} vs {teamname2} Head to Head
          </Fixtures.Fixture.Title>
          {data?.data?.map((fixture) => (
            <Transition key={fixture?.fixture?.id}>
              <Fixtures.Fixture key={fixture?.fixture?.id}>
                <Fixtures.Fixture.League>
                  {fixture?.league?.name + " " + fixture?.league?.round}
                </Fixtures.Fixture.League>
                <Fixtures.Fixture.Date>
                  {new Date(fixture?.fixture?.date).toLocaleString()}
                </Fixtures.Fixture.Date>
                <Fixtures.Fixture.Content>
                  <Fixtures.Fixture.Venue>
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
                  onClick={() => handleNavToGameZone(`${fixture?.fixture?.id}`)}
                >
                  Check Out Game Zone
                </Fixtures.Fixture.GameZone>
                <Fixtures.Fixture.HR />
              </Fixtures.Fixture>
            </Transition>
          ))}
        </Fixtures>
        <TopButton />
      </>
    );

  return <section>{content}</section>;
};

export default HeadToHead;
