import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { likePost } from "../../../store/posts/postActions";
import Item from "./Style";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const Like = ({ post }) => {
  const { user } = useSelector((state) => state.auth);
  const [likes, setLikes] = useState(post.likes?.length);
  const [likedByUser, setLikedByUser] = useState(
    post.likes?.includes(user._id) ? true : false
  );

  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likePost(post._id, { user: user._id }));
    setLikes(likedByUser ? likes - 1 : likes + 1);
    setLikedByUser(!likedByUser);
  };

  return (
    <Item.Like>
      {likes > 0 && (
        <Item.Like.Count>
          {likes}
        </Item.Like.Count>
      )}
      {likedByUser ? (
        <Item.Like.Icon onClick={handleLike}>
          <BsHeartFill size={16} />
        </Item.Like.Icon>
      ) : (
        <Item.Like.Icon onClick={handleLike}>
          <BsHeart size={16} />
        </Item.Like.Icon>
      )}
    </Item.Like>
  );
};

export default Like;
