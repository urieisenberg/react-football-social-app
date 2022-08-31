import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../store/users/userActions";
import { logout } from "../../../store/auth/authActions";
import User from "../Style";
import { toast } from "react-toastify";
import Button from "../../../components/Button/Button";
import Transition from "../../../components/Transition/Transition";

const Delete = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onDelete = () => {
    dispatch(deleteUser(user._id));
    toast.success(" Ciao 👋 ");
    setTimeout(() => {
      dispatch(logout());
    }, 1000);
  };

  return (
    <Transition key="delete">
      <User>
        <User.Delete>
          <User.Delete.P>
            In this page you can delete your account.
          </User.Delete.P>
          <User.Delete.P>
            Please be aware that all of your account information, including
            stored fixtures, followers, followings and posts will be permanently
            deleted.
          </User.Delete.P>
          <User.Delete.P>
            You can open a ticket
            <User.Delete.Icon
              onClick={() => navigate("/contact/create/ticket")}
            >
              here
            </User.Delete.Icon>{" "}
            for further information.
          </User.Delete.P>
          <User.Delete.P>
            You will be redirected to the welcome page after deleting your
            account.
          </User.Delete.P>
          <Button action={onDelete} text="Delete account" variant="error" />
        </User.Delete>
      </User>
    </Transition>
  );
};

export default Delete;
