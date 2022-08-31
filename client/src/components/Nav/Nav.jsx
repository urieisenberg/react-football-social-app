import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Style";
import { IoSettingsOutline } from "react-icons/io5";

const Nav = ({ links, mini }) => {
  const { pathname } = useLocation();

  return (
    <Navbar>
      <Navbar.Content>
        <Navbar.Nav>
          {links?.map((link) => (
            <Navbar.Item
              key={link}
              as={motion.span}
              mini={mini}
              show={
                (link === "coach") |
                  (link === "stadium") |
                  (link === "social") |
                  (link === "feed") && "none"
              }
            >
              <Navbar.Nav.Link
                as={NavLink}
                to={link.replaceAll(" ", "/")}
                active={
                  pathname.includes(link.replaceAll(" ", "/"))
                    ? "true"
                    : "false"
                }
              >
                {link === "settings" ? <IoSettingsOutline /> : link}
              </Navbar.Nav.Link>
            </Navbar.Item>
          ))}{" "}
        </Navbar.Nav>
      </Navbar.Content>
    </Navbar>
  );
};

export default Nav;
