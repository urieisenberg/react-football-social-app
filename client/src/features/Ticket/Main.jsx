import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Contact from "./Style";
import Button from "../../components/Button/Button";
import Transition from "../../components/Transition/Transition";

const Main = () => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  return (
    <Transition key="contact">
      <Contact>
        <Contact.Main>
          <Contact.Main.Name>Hi {user.username}</Contact.Main.Name>
          <Contact.Main.P>
            We are here to help you with any questions you may have. In this
            page You can create a and check all your tickets and to create a new
            one.
          </Contact.Main.P>
          <Contact.Main.Links>
            <Button
              noborder="true"
              text="My Tickets"
              variant="interactive"
              action={() => navigate("tickets")}
            />
            <Button
              noborder="true"
              variant="success"
              text="Create New Ticket"
              action={() => navigate("create/ticket")}
            />
          </Contact.Main.Links>
          <Contact.Main.P>
            We will provide an answer as soon as possible. Thank you for your
            patience.
          </Contact.Main.P>
        </Contact.Main>
      </Contact>
    </Transition>
  );
};

export default Main;
