import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTeamPosts } from "../../../../store/posts/postActions";
import Share from "../../Share";
import Post from "../../Item/Post";
import List from "../Style";
import Transition from "../../../../components/Transition/Transition";

const Posts = () => {
  const { teamid, teamname } = useParams();

  const { teamPosts, post, isLoading, isError } = useSelector(
    (state) => state.posts
  );
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeamPosts(teamid));
  }, [teamPosts.length, post, comments, dispatch, teamid]);

  let content;
  if ((teamPosts.length === 0 && !isLoading) || isError)
    content = <List.Post.H4>No {teamname} fans posts found</List.Post.H4>;
  else
    content = (
      <List.Post.Container>
        {teamPosts.map((post) => <Post key={post._id} post={post} />).reverse()}
      </List.Post.Container>
    );

  return (
    <Transition key="posts">
      {" "}
      <List.Post.Title>{teamname} Fans Private Feed</List.Post.Title>
      <Share type={teamid} />
      <List.Post>
        <List.Post.Container>{content}</List.Post.Container>
      </List.Post>
    </Transition>
  );
};

export default Posts;
