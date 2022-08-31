import styled from "styled-components";
import Main from "./Main";
import List from "./List";
import Item from "./Item";
import Ticket from "./Ticket";

const Contact = styled.div.attrs({
  className: "container",
})``;

Contact.Main = Main;
Contact.List = List;
Contact.Item = Item;
Contact.Ticket = Ticket;

export default Contact;
