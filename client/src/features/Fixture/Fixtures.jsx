import {
  useRoutes,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import Next from "./List/Next";
import Previous from "./List/Previous";
import Round from "./List/Round";
import HeadToHead from "./List/HeadToHead";
import Fixture from "./Item/Fixture";
import Nav from "../../components/Nav/Nav";

const Fixtures = () => {
    const { pathname } = useLocation();

  let leagueElements = useRoutes([
    { path: "", element: <Navigate to="next" /> },
    { path: "next", element: <Round /> },
    { path: "last", element: <Round /> },
    { path: ":fixture", element: <Fixture path="league" /> },
    {
      path: ":teamsids/:teamname1/:teamname2",
      element: <HeadToHead path="league" />,
    },
  ]);

  let teamElements = useRoutes([
    { path: "", element: <Navigate to="next" /> },
    { path: "next", element: <Next /> },
    { path: "last", element: <Previous /> },
    { path: ":fixture", element: <Fixture path="team" /> },
    {
      path: ":teamsids/:teamname1/:teamname2",
      element: <HeadToHead path="team" />,
    },
  ]);

  return (
    <>
      <Nav mini="true" links={["last", "next"]} />
      <Outlet />
      {pathname?.startsWith("/team") ? teamElements : leagueElements}
    </>
  );
};

export default Fixtures;
