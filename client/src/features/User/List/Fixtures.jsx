import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser, getSavedFixtures } from "../../../store/users/userActions";
import User from "../Style";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";
import DeleteOneFixture from "../Delete/Fixture";
import ClearFixtures from "../Delete/ClearFixtures";

const Fixtures = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { userInfo, fixtures, isLoading, isError } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getUser(username ? username : user.username));
  }, [dispatch, username, user.username]);

  useEffect(() => {
    dispatch(getSavedFixtures(userInfo._id));
  }, [dispatch, userInfo._id, fixtures?.length, navigate]);

  let userIsCurrentUser =
    username === user.username ? "you have" : username + " has";

  let content;
  if (isLoading) content = <Loader />;
  else if ((!fixtures?.length && !isLoading) || isError)
    content = (
      <User.Title>
        {username
          ? `${userIsCurrentUser} no saved fixtures.`
          : "You have no saved fixtures."}
      </User.Title>
    );
  else
    content = (
      <User>
        <User.Title>
          {userInfo?.savedFixtures?.length}{" "}
          {userInfo?.savedFixtures?.length === 1 ? "fixture" : "fixtures"}
          {userInfo?.username === user.username ? " you have" : " has"} saved
        </User.Title>
        {!username && <ClearFixtures />}
        <User.List>
          {fixtures
            .map((fixture) => (
              <User.List.Col key={fixture?.id}>
                {!username && (
                  <DeleteOneFixture fixture={fixture?.id} key={fixture?.date} />
                )}
                <User.List.Fixture
                  onClick={() =>
                    navigate(
                      `/league/${fixture?.league?.id}/fixtures/${fixture?.id}`
                    )
                  }
                >
                  <User.List.Date>
                    {new Date(fixture?.date).toLocaleString()}
                  </User.List.Date>
                  <User.List.Img
                    src={fixture?.home?.logo}
                    alt={fixture?.home?.name}
                  />
                  <User.List.Img
                    src={fixture?.away?.logo}
                    alt={fixture?.away?.logo}
                  />
                  <User.List.Subtitle>
                    {fixture?.home?.name} vs {fixture?.away?.name}
                  </User.List.Subtitle>{" "}
                </User.List.Fixture>
              </User.List.Col>
            ))
            .reverse()}
        </User.List>
      </User>
    );

  return <Transition key="userFixturesList">{content}</Transition>;
};

export default Fixtures;
