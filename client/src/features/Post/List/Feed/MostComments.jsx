import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../../../store/posts/postActions";
import Post from "../../Item/Post";
import List from "../Style";
import Transition from "../../../../components/Transition/Transition";

const MostComments = () => {
  const { posts, post, isLoading, isSuccess, isError } = useSelector(
    (state) => state.posts
  );
  const { comments } = useSelector((state) => state.comments);

  const dispatch = useDispatch();

  const commentedPosts = posts
    .filter((post) => post.comments.length > 0)
    .sort((a, b) => b.comments.length - a.comments.length);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [commentedPosts.length, post, comments, dispatch]);

  let content;
  if (commentedPosts.length === 0 || !isSuccess || isError)
    content = <List.Post.H4>No posts found</List.Post.H4>;
  else
    content = (
      <List.Post>
        <List.Post.Container>
          {" "}
          <List.Post.Title>Most commented posts</List.Post.Title>
          {commentedPosts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </List.Post.Container>
      </List.Post>
    );

  return <Transition key="postsByLikes">{content}</Transition>;
};

export default MostComments;
