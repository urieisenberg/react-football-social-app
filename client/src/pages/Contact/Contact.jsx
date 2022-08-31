import { useRoutes, Outlet } from "react-router-dom";
import {
  Main,
  List,
  Ticket,
  Create,
  Edit,
  Container,
} from "../../features/Ticket";
import Nav from "../../components/Nav/Nav";
import BackButton from "../../components/Button/BackButton";

const Contact = () => {
  let elements = useRoutes([
    { index: true, path: "", element: <Main /> },
    { path: "tickets", element: <List /> },
    { path: "create/ticket", element: <Create /> },
    { path: "ticket/:ticketid", element: <Ticket /> },
    { path: "ticket/:ticketid/edit", element: <Edit /> },
  ]);

  return (
    <Container>
      <BackButton size="30" />
      <Nav links={["tickets", "create ticket"]} />
      <Outlet />
      {elements}
    </Container>
  );
};

export default Contact;
