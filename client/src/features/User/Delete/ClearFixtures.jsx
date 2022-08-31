import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllFixtures } from "../../../store/users/userActions";
import User from "../Style";
import { toast } from "react-toastify";
import { BsTrash } from "react-icons/bs";

const ClearFixtures = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onClick = () => {
    dispatch(deleteAllFixtures(user._id));
    toast.success("All fixtures deleted", { toastId: "deleteAllFixtures" });
  };

  let content;
  if (!user?.fixtures) content = null;
  else
    content = (
      <User.List.Delete onClick={onClick}>
        Delete All Fixtures
      </User.List.Delete>
    );

  return content;
};

export default ClearFixtures;
