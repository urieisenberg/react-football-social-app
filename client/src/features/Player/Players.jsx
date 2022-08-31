import { useState } from "react";
import {
  useRoutes,
  Outlet,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Search from "../../components/Search/Search";
import {
  TopScorers,
  TopAssists,
  TopRedCards,
  TopYellowCards,
  SearchPlayers,
  Team,
  Injuries,
} from "./List";
import Player from "./Item/Player";

const Players = () => {
  const [search, setSearch] = useState("");

  const { pathname } = useLocation();
  const navigate = useNavigate();

  let leagueElements = useRoutes([
    { path: "/", element: <Navigate to="top/scorers" /> },
    { path: "top/scorers", element: <TopScorers /> },
    { path: "top/assists", element: <TopAssists /> },
    { path: "top/red", element: <TopRedCards /> },
    { path: "top/yellow", element: <TopYellowCards /> },
    { path: "search", element: <SearchPlayers /> },
  ]);

  let teamElements = useRoutes([
    { path: "/", element: <Navigate to="squad" /> },
    { path: "squad", element: <Team /> },
    { path: "injuries", element: <Injuries /> },
    { path: ":playerid", element: <Player /> },
  ]);

  const onSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length >= 4) {
      navigate(`search?search=${e.target.value}`);
    }
  };

  const renderLinks = () => {
    let links = [];
    if (pathname.startsWith("/team")) links.push("squad", "injuries");
    else if (pathname.startsWith("/league"))
      links.push("top scorers", "top assists", "top red", "top yellow");
    return links;
  };

  return (
    <>
      {pathname.includes("league") && (
        <>
          <Search
            placeholder="Search players"
            setSearch={onSearch}
            search={search}
          />
        </>
      )}
      <Nav mini="true" links={renderLinks()} />
      <Outlet />
      {pathname?.startsWith("/team") ? teamElements : leagueElements}
    </>
  );
};

export default Players;
