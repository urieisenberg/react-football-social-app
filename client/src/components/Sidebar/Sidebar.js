import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { logout } from "../../store/auth/authActions";
import { reset } from "../../store/auth/authSlice";
import { motion } from "framer-motion";
import Sidebar from "./Style";
import Item from "./Item";
import { useToggle } from "../../hooks/useToggle";
import Loader from "../Loader/Loader";
import { GiSoccerKick, GiSoccerField } from "react-icons/gi";
import {
  GoThreeBars,
  GoListUnordered,
  GoCommentDiscussion,
} from "react-icons/go";
import {
  IoPowerOutline,
  IoSettingsOutline,
  IoHelpCircleOutline,
  IoPersonOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import { BiEuro } from "react-icons/bi";
import { FaUserNinja } from "react-icons/fa";
import BackButton from "../Button/BackButton";

const SidebarMenu = () => {
  const [showMenu, setShowMenu] = useToggle();

  const { isAuthenticated, checkingStatus } = useAuth();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/welcome");
  };

  if (checkingStatus) return <Loader />;

  return isAuthenticated ? (
    <Sidebar
      as={motion.div}
      data-show-menu={showMenu}
      initial={`${showMenu}`}
      animate={`${showMenu}`}
    >
      <Sidebar.Menu
        as={motion.div}
        initial={`${showMenu}`}
        animate={`${showMenu}`}
      >
        {showMenu && <BackButton size={18} />}
        <Sidebar.Toggle as={motion.div} onClick={setShowMenu}>
          {showMenu ? <GoThreeBars size={30} /> : <GoListUnordered size={20} />}
        </Sidebar.Toggle>
        <Sidebar.Profile
          onClick={() => navigate(`/team/${user?.team.id}/${user?.team.name}`)}
          as={motion.div}
          initial={`${showMenu}`}
          animate={`${showMenu}`}
        >
          <img src={user?.team.logo} alt="profile" />
        </Sidebar.Profile>
        <Sidebar.Group>
          <Item
            title="Serie A"
            icon={<GiSoccerField size={20} />}
            link="league/135"
          />
          <Item
            title="Players"
            icon={<GiSoccerKick size={20} />}
            link={`team/${user?.team.id}/${user?.team.name}/players`}
          />{" "}
          <Item
            title="Transfers"
            icon={<BiEuro size={20} />}
            link={`team/${user?.team.id}/${user?.team.name}/transfers`}
          />
          <Item
            title="Table"
            icon={<IoTrophyOutline size={20} />}
            link={`team/${user?.team.id}/${user?.team.name}/standings`}
          />
          <Item
            title="Serie A Feed"
            icon={<GoCommentDiscussion size={20} />}
            link="feed/newest"
          />
          <Item
            title={user?.team.name + " Feed"}
            icon={<FaUserNinja size={20} />}
            link={`team/${user?.team.id}/${user?.team.name}/feed`}
          />
          <Item
            title="Profile"
            icon={<IoPersonOutline size={20} />}
            link={`profile/${user?.username}/posts`}
          />{" "}
          <Item
            title="Contact Us"
            icon={<IoHelpCircleOutline size={20} />}
            link="contact"
          />
          <Item
            title="Account"
            icon={<IoSettingsOutline size={20} />}
            link={`account/${user?._id}`}
          />
          <Item
            title={<span className="logOutSideBar">Logout</span>}
            icon={<IoPowerOutline className="logOutSideBar" size={20} />}
            link="welcome"
            action={handleLogout}
          />
        </Sidebar.Group>
      </Sidebar.Menu>
    </Sidebar>
  ) : null;
};

export default SidebarMenu;
