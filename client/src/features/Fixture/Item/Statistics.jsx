import { useParams } from "react-router-dom";
import { useGetStatisticsQuery } from "../../../store/api/fixtureSlice";
import Fixtures from "../Style";

const Statistics = () => {
  const { fixture } = useParams();
  const { data, isError } = useGetStatisticsQuery(fixture);

  const homeTeamStatistics = data?.data[0]?.statistics;
  const awayTeamStatistics = data?.data[1]?.statistics;

  let content;
  if (!homeTeamStatistics || !awayTeamStatistics || isError) content = null;
  else
    content = (
      <>
        <Fixtures.Events.HR />
        <Fixtures.Events.SubTitle>Statistics</Fixtures.Events.SubTitle>
        <Fixtures.Stats>
          <Fixtures.Stats.Value>
            {homeTeamStatistics?.map((stat) => (
              <Fixtures.Stats.Value key={stat?.type}>
                {stat?.value}
              </Fixtures.Stats.Value>
            ))}
          </Fixtures.Stats.Value>
          <Fixtures.Stats.Value>
            {homeTeamStatistics?.map((stat) => (
              <Fixtures.Stats.Type key={stat?.type}>
                {stat?.type}
              </Fixtures.Stats.Type>
            ))}
          </Fixtures.Stats.Value>
          <Fixtures.Stats.Value>
            {awayTeamStatistics?.map((stat) => (
              <Fixtures.Stats.Value key={stat?.type}>
                {stat?.value}
              </Fixtures.Stats.Value>
            ))}
          </Fixtures.Stats.Value>
        </Fixtures.Stats>
      </>
    );

  return <section>{content}</section>;
};

export default Statistics;
