import { useRoutes, Outlet, Navigate } from "react-router-dom";
import List from "./List";
import Team from "../Style";
import Nav from "../../../components/Nav/Nav";

const Transfers = () => {
  let elements = useRoutes([
    { path: "", element: <Navigate to="arrived" /> },
    { path: "arrived", element: <List path="arrived" /> },
    { path: "left", element: <List path="left" /> },
  ]);

  return (
    <Team>
      <Nav mini="true" links={["left", "arrived"]} />
      <Outlet />
      {elements}
    </Team>
  );
};

export default Transfers;
