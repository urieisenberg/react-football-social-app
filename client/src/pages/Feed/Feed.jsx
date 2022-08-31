import { useRoutes, Outlet } from "react-router-dom";
import {
  MostLikes,
  MostComments,
  Posts,
  Share,
  List,
} from "../../features/Post";
import Nav from "../../components/Nav/Nav";

const Feed = () => {
  let elements = useRoutes([
    { path: "likes", element: <MostLikes /> },
    { path: "comments", element: <MostComments /> },
    { path: "newest", element: <Posts /> },
    { path: "oldest", element: <Posts /> },
  ]);

  return (
    <List>
      <Nav links={["newest", "oldest", "likes", "comments"]} />
      <Share type="feed" />
      <Outlet />
      {elements}
    </List>
  );
};

export default Feed;
