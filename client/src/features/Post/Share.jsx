import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/posts/postActions";
import List from "./List/Style";

const Share = ({ type }) => {
  const [newPost, setNewPost] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => setNewPost(e.target.value);

  const post = {
    content: newPost,
    type: type,
  };

  const handleKey = (e) => {
    if (newPost.length > 1)
      if (e.key === "Enter") {
        dispatch(
          addPost({
            content: post.content,
            type: post.type,
          })
        );
        setNewPost("");
      }
    if (e.key === "Escape") {
      setNewPost("");
    }
  };

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    newPost.length > 1 &&
      dispatch(
        addPost({
          content: post.content,
          type: post.type,
        })
      );
    setNewPost("");
    type === "feed" && navigate("newest");
  };
  return (
    <List>
      <form onSubmit={onSubmit}>
        <List.Share>
          <List.Share.Input
            placeholder="Write something..."
            required
            maxLength="100"
            value={newPost}
            onKeyDown={handleKey}
            onChange={handleChange}
            type="textarea"
            as="textarea"
            rows={newPost.length < 30 ? 1 : 3}
          />
          <List.Share.Submit
            disabled={newPost.length > 1 ? false : true}
            type="submit"
          >
            Share
          </List.Share.Submit>
        </List.Share>
      </form>
    </List>
  );
};

export default Share;
