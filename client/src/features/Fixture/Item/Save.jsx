import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  saveFixture,
  getSavedFixtures,
} from "../../../store/users/userActions";
import { reset } from "../../../store/users/userSlice";
import { toast } from "react-toastify";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Fixtures from "../Style";

const Save = ({ fixture }) => {
   const [isSaved, setIsSaved] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { fixtures, isLoading } = useSelector(
    (state) => state.user
  );
  const { id } = fixture;


  const checkSaved = fixtures?.some((f) => f?.id?.toString() === id.toString());
 

  useEffect(() => {
    dispatch(getSavedFixtures(user._id));
    setIsSaved(checkSaved);
  }, [checkSaved, dispatch, user._id]);

  const fixtureToSave = {
    id: user._id,
    fixture,
  };

  const onClick = () => {
    dispatch(saveFixture(fixtureToSave));
    dispatch(reset());
    setIsSaved(!isSaved);
    if (isSaved) {
      toast.success(`You unsaved this fixture`, {
        toastId: "unsave",
      });
    } else {
      toast.success(`You saved this fixture`, {
        toastId: "save",
      });
    }
  };


  let content;
  if (isLoading) content = null;
  else if (!isSaved)
    content = (
      <Fixtures.Fixture.Save
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="save fixture"
        onClick={onClick}
      >
        <AiOutlineStar size={16} />
      </Fixtures.Fixture.Save>
    );
  else
    content = (
      <Fixtures.Fixture.Unsave
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="unsave fixture"
        onClick={onClick}
      >
        <AiFillStar size={16} />
      </Fixtures.Fixture.Unsave>
    );

  return <>{content}</>;
};

export default Save;
