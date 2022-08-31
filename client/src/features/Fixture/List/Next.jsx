import { useParams, useNavigate } from "react-router-dom";
import { useGetAllTeamNextQuery } from "../../../store/api/fixtureSlice";
import Countdown from "../Countdown/Countdown";
import Fixtures from "../Style";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";
import TopButton from "../../../components/Button/TopButton";

const Next = () => {
  const { teamid, teamname } = useParams();
  const navigate = useNavigate();

  const { data, isSuccess, isLoading, isError } =
    useGetAllTeamNextQuery(teamid);
  let content;
  if (isLoading) content = <Loader />;
  else if (!data?.data?.length || isError)
    content = <Fixtures>No fixtures found</Fixtures>;
  else if (isSuccess && data?.data)
    content = (
      <>
        <Fixtures>
          <Fixtures.Fixture>
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
                    <Fixtures.Fixture.Venue
                      onClick={() =>
                        navigate(
                          `/league/${fixture?.league?.id}/stadiums/${fixture?.fixture?.venue?.id}`
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
                      <Countdown gameDate={fixture?.fixture?.date} />
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
                          alt={fixture?.fixture?.teams?.away?.name}
                        />
                        <Fixtures.Fixture.BR />
                        {fixture?.teams?.away?.name}
                      </Fixtures.Fixture.Team.Away>
                    </Fixtures.Fixture.Team>
                  </Fixtures.Fixture.Content>
                  <Fixtures.Fixture.GameZone
                    onClick={() =>
                      navigate(
                        `/team/${
                          teamid +
                          "/" +
                          teamname +
                          "/fixtures/" +
                          fixture?.fixture?.id
                        }`
                      )
                    }
                  >
                    Check Out Game Zone
                  </Fixtures.Fixture.GameZone>{" "}
                  <Fixtures.Fixture.H2H
                    onClick={() =>
                      navigate(
                        `/team/${
                          teamid +
                          "/" +
                          teamname +
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
        <TopButton
          onClick={() => navigate(`/team/${teamid}/${teamname}/fixtures`)}
        >
          Back to Fixtures
        </TopButton>
      </>
    );

  return <section>{content}</section>;
};
export default Next;
