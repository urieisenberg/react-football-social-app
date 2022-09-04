import Sidebar from "./Style";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Item = ({ title, icon, link, route, action }) => {
  return (
    <Sidebar.Item as={motion.div}>
      <Sidebar.Icon as={motion.div}>
        <Sidebar.Link
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title={title || "logout"}
          onClick={action}
          as={NavLink}
          to={link ? `/${link}` : route}
        >
          {icon}
        </Sidebar.Link>
      </Sidebar.Icon>
      <Sidebar.Heading as={motion.span}>
        <Sidebar.Link
          onClick={action}
          as={NavLink}
          to={link ? `/${link}` : route}
        >
          {title}
        </Sidebar.Link>
      </Sidebar.Heading>
    </Sidebar.Item>
  );
};

export default Item;
