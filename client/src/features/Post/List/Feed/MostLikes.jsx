import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../../../store/posts/postActions";
import Post from "../../Item/Post";
import List from "../Style";
import Transition from "../../../../components/Transition/Transition";
import Loader from "../../../../components/Loader/Loader";

const MostLikes = () => {
  const { posts, post, isSuccess, isLoading, isError } = useSelector((state) => state.posts);
  const { comments } = useSelector((state) => state.comments);

  const dispatch = useDispatch();

  const likedPosts = posts
    .filter((post) => post.likes.length > 0)
    .sort((a, b) => b.likes.length - a.likes.length);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [likedPosts.length, likedPosts.likes, post, comments, dispatch]);

  let content;
  if (isLoading) content = <Loader />;
  else if ((likedPosts.length === 0 || !isSuccess) || isError)
    content = <List.Post.H4>No posts found</List.Post.H4>;
  else
    content = (
      <List.Post>
        <List.Post.Container>
          {likedPosts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </List.Post.Container>
      </List.Post>
    );

  return <Transition key="postsByLikes">{content}</Transition>;
};

export default MostLikes;
