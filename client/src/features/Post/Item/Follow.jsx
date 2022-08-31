import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../../store/users/userActions";
import { toast } from "react-toastify";
import Item from "./Style";
import { BsPersonPlus, BsPersonDash } from "react-icons/bs";

const Follow = ({ post }) => {
  const { user } = useSelector((state) => state.auth);
  const { following } = useSelector((state) => state.user);
  const [userFollow, setUserFollow] = useState(following.includes(post.user));

  const dispatch = useDispatch();

  const onFollow = () => {
    dispatch(followUser(post.user));
    setUserFollow(true);
    toast.success(`You are now following ${post.username}`, {
      toastId: "follow",
    });
  };

  const onUnfollow = () => {
    dispatch(unfollowUser(post.user));
    setUserFollow(false);
    toast.success(`You are no longer following ${post.username}`, {
      toastId: "unfollow",
    });
  };

  let content;
  if (!userFollow)
    content = (
      <Item.Follow onClick={onFollow}>
        <BsPersonPlus size={16} />
      </Item.Follow>
    );
  else
    content = (
      <Item.Unfollow onClick={onUnfollow}>
        <BsPersonDash size={16} />
      </Item.Unfollow>
    );

  return <>{user._id !== post.user && content}</>;
};

export default Follow;
