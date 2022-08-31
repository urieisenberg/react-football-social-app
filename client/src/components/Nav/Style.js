import styled from "styled-components";
import { Nav as NavBs, Navbar as NavbarBs, Container } from "react-bootstrap";

const Navbar = styled(NavbarBs).attrs((props) => ({
  expand: "lg",
}))`
  background-color: ${(props) => props.theme.bodyBg};
  color: ${(props) => props.theme.textColor};
`;

const Nav = styled(NavBs)`
  margin: 0 auto;

  @media (max-width: 990px) {
    display: inline-block;
  }
`;

const Link = styled(NavBs.Link)`
  color: ${(props) =>
    props.active === "true" ? props.theme.interactive : props.theme.textColor};
  font-weight: ${(props) => (props.active === "true" ? "500" : "normal")};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${(props) => props.theme.interactive};
  }
`;

const Item = styled.span.attrs((props) => ({
  whileTap: {
    scale: 1.3,
  },
  whileHover: {
    scale: 1.1,
  },
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 10,
    mass: 1,
  },
}))`
  margin: 10px;
  font-size: ${(props) => (props.mini === "true" ? "0.9rem" : "1rem")};

  &:hover {
    font-weight: bold;
  }

  @media (max-width: 990px) {
    display: ${(props) => props.show === "none" && "none"};
  }
`;

const Content = styled(Container)``;

Navbar.Nav = Nav;
Nav.Link = Link;
Navbar.Item = Item;
Navbar.Content = Content;

export default Navbar;
