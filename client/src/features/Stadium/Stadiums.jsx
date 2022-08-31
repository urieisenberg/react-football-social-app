import { useState } from "react";
import { useNavigate, useRoutes, Outlet, Navigate } from "react-router-dom";
import Search from "../../components/Search/Search";
import Stadium from "./Style";
import SearchStadium from "./List/Search";
import Item from "./Item/Item";
import List from "./List/List";

const Stadiums = () => {
  let elements = useRoutes([
    { path: "", element: <Navigate to="list" /> },
    { path: "list", element: <List /> },
    {
      path: "search",
      element: <SearchStadium />,
    },
    {
      path: ":stadiumid",
      element: <Item />,
    },
  ]);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const onSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length >= 3) navigate(`search?search=${e.target.value}`);
  };

  return (
    <Stadium>
      <Search
        search={search}
        placeholder="Search stadium name or city"
        setSearch={onSearch}
      />
      <Outlet />
      {elements}{" "}
    </Stadium>
  );
};

export default Stadiums;
