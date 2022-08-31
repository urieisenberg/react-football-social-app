import { useRoutes, useParams, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetTeamQuery } from "../../store/api/teamSlice";
import { Info, Transfers, Coach, Container } from "../../features/Team";
import { Table } from "../../features/League";
import Social from "../../features/Social/Social";
import Item from "../../features/Stadium/Item/Item";
import Fixtures from "../../features/Fixture/Fixtures";
import Players from "../../features/Player/Players";
import Posts from "../../features/Post/List/Team/Posts";
import Nav from "../../components/Nav/Nav";
import BackButton from "../../components/Button/BackButton";
import teams from "../../db/teams";

const Team = () => {
  const { teamid } = useParams();
  const { user } = useSelector((state) => state.auth);

  const { data, isSuccess } = useGetTeamQuery(teamid, {
    refetch: () => {
      return;
    },
  });

  let elements = useRoutes([
    { path: "", element: <Navigate to="fixtures" /> },
    { path: "fixtures/*", element: <Fixtures /> },
    { path: "players/*", element: <Players /> },
    { path: "social/*", element: <Social /> },
    { path: "standings", element: <Table /> },
    { path: "coach", element: <Coach /> },
    { path: "transfers/*", element: <Transfers /> },
    { path: "stadium", element: <Item teamVenue={data?.data?.venue?.id} /> },
    { path: "feed", element: <Posts /> },
  ]);

  //checking if team is from serie a, if not less to show
  const team = teams.find((team) => team.id === Number(teamid));

  const renderLinks = () => {
    let links = [
      "fixtures",
      "players",
      "standings",
      "transfers",
      "stadium",
      "coach",
    ];
    if (user.team.id === Number(teamid)) links.push("social", "feed");
    else if (team) links.push("social");

    return links;
  };

  return (
    <Container>
      <BackButton size="30" />
      {isSuccess && <Info team={data?.data} />}
      <Nav links={renderLinks()} />
      <Outlet />
      {elements}
    </Container>
  );
};

export default Team;
