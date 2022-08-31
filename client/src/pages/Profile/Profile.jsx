import { useRoutes, Navigate, Outlet } from "react-router-dom";
import {
  User,
  Follows,
  Followed,
  Fixtures,
  Container,
} from "../../features/User";
import { UserPosts, LikedPosts } from "../../features/Post";
import Nav from "../../components/Nav/Nav";

const Profile = () => {
  let elements = useRoutes([
    { path: "", element: <Navigate to="posts" /> },
    { path: "posts", element: <UserPosts /> },
    { path: "following", element: <Follows /> },
    { path: "followers", element: <Followed /> },
    { path: "likes", element: <LikedPosts /> },
    { path: "fixtures", element: <Fixtures /> },
  ]);

  return (
    <Container>
      <User />
      <Nav links={["posts", "likes", "fixtures", "following", "followers"]} />
      <Outlet />
      {elements}
    </Container>
  );
};

export default Profile;
