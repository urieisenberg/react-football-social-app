import { Link } from "react-router-dom";
import Contact from "../Style";
import Button from "../../../components/Button/Button";

const Item = ({ ticket }) => {
  return (
    <Contact.Item>
      <Contact.Item.Heading>
        {new Date(ticket?.createdAt).toLocaleString()}
      </Contact.Item.Heading>
      <Contact.Item.Heading>{ticket?.subject}</Contact.Item.Heading>
      <Contact.Item.Status status={ticket?.status}>
        {ticket?.status}
      </Contact.Item.Status>
      <Link to={`/contact/ticket/${ticket?._id}`}>
        <Button text="view"/>
      </Link>
    </Contact.Item>
  );
};

export default Item;
