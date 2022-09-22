import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts, searchPost } from "../../../../store/posts/postActions";
import Search from "../../../../components/Search/Search";
import Post from "../../Item/Post";
import List from "../Style";
import Transition from "../../../../components/Transition/Transition";

const Posts = () => {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const { posts, post, isError, isLoading } = useSelector(
    (state) => state.posts
  );
  const { comments } = useSelector((state) => state.comments);

  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const onSearch = (e) => {
    setSearch(e.target.value);
    setSearchParams({ search: e.target.value });
  };

  useEffect(() => {
    if (search) dispatch(searchPost({ searchTerm: search }));
    else dispatch(getAllPosts());
  }, [search, posts.length, post, comments, dispatch]);

  const path = pathname.substring(pathname.lastIndexOf("/") + 1);

  let content;
  if ((posts.length === 0 && !isLoading) || isError)
    content = <List.Post.H4>No posts found</List.Post.H4>;
  else if (path === "oldest") {
    content = (
      <List.Post.Container>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </List.Post.Container>
    );
  } else if (path === "newest") {
    content = (
      <List.Post.Container>
        {posts.map((post) => <Post key={post._id} post={post} />).reverse()}
      </List.Post.Container>
    );
  }

  return (
    <Transition key="posts">
      <List.Post>
        <List.Post.Container>
          <Search
            placeholder="Search posts"
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

export default Posts;
