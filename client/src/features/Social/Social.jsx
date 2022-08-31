import {
  useRoutes,
  useNavigate,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import Twitter from "./Twitter";
import Facebook from "./Facebook";
import Youtube from "./Youtube";
import Button from "../../components/Button/Button";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { List } from "./Style";

const Social = () => {
  let leagueElements = useRoutes([
    { path: "", element: <Navigate to="youtube" /> },
    { path: "twitter", element: <Twitter /> },
    { path: "facebook", element: <Facebook /> },
    { path: "youtube", element: <Youtube /> },
  ]);

  let teamElements = useRoutes([
    { path: "", element: <Navigate to="twitter" /> },
    { path: "twitter", element: <Twitter /> },
    { path: "facebook", element: <Facebook /> },
  ]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <List>
        <Button
        noborder="true"
        icon={<FaTwitter size={30} />}
        action={() => navigate("twitter")}
      />
      <Button
        noborder="true"
        icon={<FaFacebook size={30} />}
        action={() => navigate("facebook")}
      />
      {pathname.startsWith("/league") && (
        <Button
          noborder="true"
          icon={<FaYoutube size={30} />}
          action={() => navigate("youtube")}
        />
      )}
      <Outlet />
      {pathname.startsWith("/team") ? teamElements : leagueElements}
    </List>
  );
};

export default Social;
