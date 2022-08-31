import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserPosts,
  searchUserPosts,
} from "../../../../store/posts/postActions";
import Search from "../../../../components/Search/Search";
import Post from "../../Item/Post";
import List from "../Style";
import Transition from "../../../../components/Transition/Transition";
import Loader from "../../../../components/Loader/Loader";

const UserPosts = () => {
  const [search, setSearch] = useState("");
  const { username } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const { post, userPosts, isLoading } = useSelector((state) => state.posts);
  const { comment, comments } = useSelector((state) => state.comments);

  const dispatch = useDispatch();

  const onSearch = (e) => {
    if (userPosts.length < 1) e.preventDefault();
    setSearch(e.target.value);
    setSearchParams({ search: e.target.value });
  };

  useEffect(() => {
    if (search)
      dispatch(searchUserPosts({ username: username, searchTerm: search }));
    else dispatch(getUserPosts(username));
  }, [search, post, userPosts.length, comments, dispatch, username]);

  let content;
  if (isLoading)
    content = (
      <List>
        <Loader />
      </List>
    );
  if (userPosts.length === 0)
    content = <List.Post.H4>No posts found</List.Post.H4>;
  else
    content = (
      <List.Post.Container>
        {userPosts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </List.Post.Container>
    );

  return (
    <Transition key="posts">
      <List.Post>
        <List.Post.Container>
          <Search
            placeholder={`search ${username} posts`}
            setSearch={onSearch}
            search={search}
            transparent="true"
          />
          {search && <List.Post.H4>Search results for {search}</List.Post.H4>}
          {content}
        </List.Post.Container>
      </List.Post>
    </Transition>
  );
};

export default UserPosts;
