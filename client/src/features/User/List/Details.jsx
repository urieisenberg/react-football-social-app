import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../../store/users/userActions";
import User from "../Style";
import Transition from "../../../components/Transition/Transition";

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser(user.username));
  }, [dispatch, user.username]);

  return (
    <Transition>
      <User>
        <User.Content>
          <>
            User Name:
            <User.Content.B>{user.username}</User.Content.B>
          </>
          <>
            Email:
            <User.Content.B>{user.email}</User.Content.B>
          </>
          <>
            Team:
            <User.Content.B>
              <User.Content.Icon
                onClick={() =>
                  navigate(`/team/${user.team.id}/${user.team.name}`)
                }
              >
                {user.team.name}
              </User.Content.Icon>
            </User.Content.B>
          </>

          <>
            Created At:
            <User.Content.B>
              {new Date(userInfo.createdAt).toLocaleString()}
            </User.Content.B>
          </>
          <>
            Followers:
            <User.Content.B>
              <User.Content.Icon
                onClick={() =>
                  navigate(`/profile/${user.username}/followers`)
                }
              >
                {userInfo.followed?.length}
              </User.Content.Icon>
            </User.Content.B>
          </>
          <>
            Following:
            <User.Content.B>
              <User.Content.Icon
                onClick={() =>
                  navigate(`/profile/${userInfo.username}/following`)
                }
              >
                {userInfo?.follows?.length}
              </User.Content.Icon>
            </User.Content.B>
          </>
        </User.Content>
      </User>
    </Transition>
  );
};

export default Details;
