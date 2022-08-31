import styled from "styled-components";
import Group from "./Group";
import Link from "./Link";
import Profile from "./Profile";
import Icon from "./Icon";
import Heading from "./Heading";
import Item from "./Item";
import Menu from "./Menu";
import Toggle from "./Toggle";

const Sidebar = styled.div.attrs((props) => ({
  variants: {
    true: {
      marginTop: "0rem",
    },
    false: {
      marginTop: "4rem",
    },
  },
}))`
  position: sticky;
  top: 0;
  left: 0;
  float: left;
  align-items: center;
  z-index: 12222;
  box-sizing: border-box;
  padding-right: 0.2rem;
`;

Sidebar.Menu = Menu;
Sidebar.Item = Item;
Sidebar.Heading = Heading;
Sidebar.Group = Group;
Sidebar.Icon = Icon;
Sidebar.Link = Link;
Sidebar.Profile = Profile;
Sidebar.Toggle = Toggle;

export default Sidebar;
