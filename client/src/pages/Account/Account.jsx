import { useRoutes, Navigate, Outlet } from "react-router-dom";
import {
  User,
  Follows,
  Followed,
  Fixtures,
  Delete,
  Details,
  Container,
} from "../../features/User";
import List from "../../features/Ticket/List/List";
import Nav from "../../components/Nav/Nav";

const Account = () => {
  let elements = useRoutes([
    { path: "", element: <Navigate to="details" /> },
    { path: "details", element: <Details /> },
    { path: "delete/account", element: <Delete /> },
    { path: "fixtures/list", element: <Fixtures /> },
    { path: "tickets/list", element: <List /> },
    { path: "following/list", element: <Follows /> },
    { path: "followers/list", element: <Followed /> },
  ]);
  return (
    <Container>
      <Nav
        links={[
          "details",
          "fixtures list",
          "tickets list",
          "delete account",
        ]}
      />
      <Outlet />
      {elements}
    </Container>
  );
};

export default Account;
