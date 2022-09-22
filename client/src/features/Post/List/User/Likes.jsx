import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLikedPosts } from "../../../../store/posts/postActions";
import Post from "../../Item/Post";
import List from "../Style";
import Transition from "../../../../components/Transition/Transition";

const LikedPosts = () => {
  const { post, likedPosts, isLoading, isError } = useSelector(
    (state) => state.posts
  );
  const { comments } = useSelector((state) => state.comments);

  const dispatch = useDispatch();

  const { username } = useParams();

  useEffect(() => {
    dispatch(getLikedPosts(username));
  }, [
    post,
    post?.likes?.length,
    dispatch,
    comments,
    username,
    likedPosts.length,
  ]);

  let content;
  if ((likedPosts.length === 0 && !isLoading) || isError)
    content = <List.Post.H4>No posts found</List.Post.H4>;
  else
    content = (
      <List.Post>
        <List.Post.Container>
          <List.Post.H4>{username} likes</List.Post.H4>
          {likedPosts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </List.Post.Container>
      </List.Post>
    );

  return <Transition key="likes">{content}</Transition>;
};

export default LikedPosts;
