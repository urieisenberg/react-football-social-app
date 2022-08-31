import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFixture,
  deleteAllFixtures,
} from "../../../store/users/userActions";
import User from "../Style";
import { toast } from "react-toastify";
import { BsTrash } from "react-icons/bs";

const Fixture = ({ fixture }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const {  fixtures, isLoading, isError } = useSelector(
    (state) => state.user
  );

  const onClick = () => {
    dispatch(
      deleteFixture({
        id: user._id,
        fixture: fixture,
      })
    );
    toast.success("Fixture deleted", { toastId: "deleteFixture" });
  };

  let content;
  if (!fixtures?.length || isError) content = null;
  else
    content = (
      <User.List.Delete onClick={onClick}>
        <BsTrash />
      </User.List.Delete>
    );

  return content;
};

export default Fixture;
