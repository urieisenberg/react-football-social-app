import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getUser,
} from "../../store/users/userActions";
import Bar from "../../components/Bar/Bar";
import Transition from "../../components/Transition/Transition";

const User = () => {
  const { user } = useSelector((state) => state.auth);
  const { userInfo, following } = useSelector((state) => state.user);

  const { username } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(username));
  }, [dispatch, username, following, userInfo.followed?.length]);

  return (
    <Transition key="user">
      <Bar>
        <Bar.Title>{userInfo.username}</Bar.Title>
        <Bar.Profile src={userInfo?.team?.logo} alt={user.username} />
      </Bar>
    </Transition>
  );
};

export default User;
