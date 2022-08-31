import { useRoutes, useParams, Outlet, Navigate } from "react-router-dom";
import { Info, Table, Logos, Container } from "../../features/League";
import Players from "../../features/Player/Players";
import Social from "../../features/Social/Social";
import Fixtures from "../../features/Fixture/Fixtures";
import Stadiums from "../../features/Stadium/Stadiums";
import Nav from "../../components/Nav/Nav";
import BackButton from "../../components/Button/BackButton";

const League = () => {
  let elements = useRoutes([
    { path: "", element: <Navigate to="fixtures" /> },
    { path: "fixtures/*", element: <Fixtures /> },
    { path: "players/*", element: <Players /> },
    { path: "social/*", element: <Social /> },
    { path: "stadiums/*", element: <Stadiums /> },
    { path: "table", element: <Table /> },
  ]);

  const { leagueid } = useParams();

  const renderLinks = () => {
    let links = [];
    //135 for serie a means more data to show
    links.push("fixtures", "players", "table", "stadiums", "social");
    if (leagueid !== "135") links.pop();

    return links;
  };

  return (
    <Container>
      <BackButton size="30" />
      <Info />
      <Nav links={renderLinks()} />
      {leagueid === "135" && <Logos />}
      <Outlet />
      {elements}
    </Container>
  );
};

export default League;
