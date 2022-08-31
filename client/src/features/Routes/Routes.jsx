import { lazy } from "react";
import {
  Routes as Routing,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Protected from "./Protected";
import Public from "./Public";
import Welcome from "../../pages/Welcome/Welcome";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import League from "../../pages/League/League";
import NotFound from "../../pages/NotFound/NotFound";
import Feed from "../../pages/Feed/Feed";
import Team from "../../pages/Team/Team";
const Profile = lazy(() => import("../../pages/Profile/Profile"));
const Account = lazy(() => import("../../pages/Account/Account"));
const Contact = lazy(() => import("../../pages/Contact/Contact"));

const Routes = () => {
  const location = useLocation();

  return (
    <Routing location={location} key={location.pathname}>
      {/* protected routes */}
      <Route path="/" element={<Protected />}>
        <Route path="/" element={<Navigate to="league/135" />} />
        <Route path="league/:leagueid/*" element={<League />} />
        <Route path="feed/*" element={<Feed />} />
        <Route path="profile/:username/*" element={<Profile />} />
        <Route path="account/:userid/*" element={<Account />} />
        <Route path="contact/*" element={<Contact />} />
        <Route path="team/:teamid/:teamname/*" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      {/* public routes */}
      <Route path="welcome" element={<Public />}>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routing>
  );
};

export default Routes;
