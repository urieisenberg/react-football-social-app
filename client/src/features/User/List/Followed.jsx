import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser, getFollowed } from "../../../store/users/userActions";
import User from "../Style";
import Card from "../../../components/Card/Card";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";

const Followed = () => {
  const { username } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { userInfo, followed, isLoading, isError, isSuccess } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(username));
  }, [dispatch, username]);

  useEffect(() => {
    dispatch(getFollowed(userInfo._id));
  }, [dispatch, userInfo._id, followed?.length]);

  let content;
  if (isLoading) content = <Loader />;
  else if ((followed.length === 0 || !isSuccess) || isError)
    content = (
      <User.Title>
        no one follow {user.username === username ? "you" : username}
      </User.Title>
    );
  else
    content = (
      <User>
        <User.Title>
          {userInfo?.followed?.length}{" "}
          {userInfo?.followed?.length === 1 ? "user" : "users"} follow{" "}
          {username}
        </User.Title>
        <User.List>
          {followed.map((user, i) => <Card key={i} user={user} />).reverse()}
        </User.List>
      </User>
    );

  return <Transition key="followed">{content}</Transition>;
};

export default Followed;
