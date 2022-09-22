import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser, getFollows } from "../../../store/users/userActions";
import User from "../Style";
import Card from "../../../components/Card/Card";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";

const Follows = () => {
  const { username } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { userInfo, follows, isLoading, isError } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(username));
  }, [dispatch, username]);

  useEffect(() => {
    dispatch(getFollows(userInfo._id));
  }, [dispatch, userInfo._id, follows?.length]);

  let content;
  if (isLoading) content = <Loader />;
  else if ((follows.length === 0 && isLoading) || isError)
    content = (
      <User.Title>
        {user.username === username ? "you do " : username + " is "} not follow
        any user
      </User.Title>
    );
  else
    content = (
      <User>
        <User.Title>
          {userInfo?.follows?.length}{" "}
          {userInfo?.follows?.length === 1 ? "user" : "users"} following
        </User.Title>
        <User.List>
          {follows.map((user, i) => <Card key={i} user={user} />).reverse()}
        </User.List>
      </User>
    );

  return <Transition key="follows">{content}</Transition>;
};

export default Follows;
