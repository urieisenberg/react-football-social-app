import { useNavigate, useParams } from "react-router-dom";
import {
  useGetTableQuery,
  useGetCurrentLeagueQuery,
} from "../../store/api/leagueSlice";
import Transition from "../../components/Transition/Transition";
import League from "./Style";
import Loader from "../../components/Loader/Loader";

const Table = () => {

  const { teamid, teamname, leagueid } = useParams();
  const navigate = useNavigate();

  const { data: league } = useGetCurrentLeagueQuery(teamid);
  const teamLeague = league?.data?.league?.id;

  const { data, isSuccess, isLoading } = useGetTableQuery(
    teamLeague || leagueid
  );

  let content;
  if (isLoading || !data?.data?.league) content = <Loader />;
  else if (isSuccess)
    content = (
      <Transition key="table">
        <>
          {!leagueid && (
            <League.Table.Link
              onClick={() => navigate(`/league/${teamLeague}`)}
            >
              <img
                width={50}
                src={data?.data?.league?.logo}
                alt={data?.data?.league?.country}
              />
              <h4>
                <b>
                  {data?.data?.league?.name +
                    ", " +
                    data?.data?.league?.country}
                </b>
              </h4>
            </League.Table.Link>
          )}
          <League.Table>
            <League.Table.Head>
              <League.Table.HR>
                <League.Table.TH>#</League.Table.TH>

                <League.Table.TH></League.Table.TH>
                <League.Table.TH>Team</League.Table.TH>
                <League.Table.TH>G</League.Table.TH>
                <League.Table.TH>W</League.Table.TH>
                <League.Table.TH>D</League.Table.TH>
                <League.Table.TH>L</League.Table.TH>
                <League.Table.TH>GF</League.Table.TH>
                <League.Table.TH>GA</League.Table.TH>
                <League.Table.TH>GD</League.Table.TH>
                <League.Table.TH>PT</League.Table.TH>
              </League.Table.HR>
            </League.Table.Head>

            {data?.data?.league?.standings[0].map((standing) => (
              <League.Table.Body key={standing.rank}>
                {standing.team.name !== teamname ? (
                  <League.Table.TR
                    key={standing.rank}
                    onClick={() =>
                      navigate(
                        `/team/${standing.team.id}/${standing.team.name}`
                      )
                    }
                  >
                    <League.Table.TD>{standing.rank}</League.Table.TD>
                    <League.Table.TD>
                      {" "}
                      <League.Table.Img
                        src={standing.team.logo}
                        alt={standing.team.name}
                        width={20}
                      />
                    </League.Table.TD>
                    <League.Table.TD>{standing.team.name}</League.Table.TD>
                    <League.Table.TD>{standing.all.played}</League.Table.TD>
                    <League.Table.TD>{standing.all.win}</League.Table.TD>
                    <League.Table.TD>{standing.all.draw}</League.Table.TD>
                    <League.Table.TD>{standing.all.lose}</League.Table.TD>
                    <League.Table.TD>{standing.all.goals.for}</League.Table.TD>
                    <League.Table.TD>
                      {standing.all.goals.against}
                    </League.Table.TD>
                    <League.Table.TD>{standing.goalsDiff}</League.Table.TD>
                    <League.Table.TD>{standing.points}</League.Table.TD>
                  </League.Table.TR>
                ) : (
                  <League.Table.CurrentTeam
                    key={standing.rank}
                    onClick={() =>
                      navigate(
                        `/team/${standing.team.id}/${standing.team.name}`
                      )
                    }
                  >
                    <League.Table.TD>{standing.rank}</League.Table.TD>
                    <League.Table.TD>
                      {" "}
                      <League.Table.Img
                        src={standing.team.logo}
                        alt={standing.team.name}
                        width={20}
                      />
                    </League.Table.TD>
                    <League.Table.TD>{standing.team.name}</League.Table.TD>
                    <League.Table.TD>{standing.all.played}</League.Table.TD>
                    <League.Table.TD>{standing.all.win}</League.Table.TD>
                    <League.Table.TD>{standing.all.draw}</League.Table.TD>
                    <League.Table.TD>{standing.all.lose}</League.Table.TD>
                    <League.Table.TD>{standing.all.goals.for}</League.Table.TD>
                    <League.Table.TD>
                      {standing.all.goals.against}
                    </League.Table.TD>
                    <League.Table.TD>{standing.goalsDiff}</League.Table.TD>
                    <League.Table.TD>{standing.points}</League.Table.TD>
                  </League.Table.CurrentTeam>
                )}
              </League.Table.Body>
            ))}
          </League.Table>
        </>
      </Transition>
    );

  return <section>{content}</section>;
};

export default Table;
