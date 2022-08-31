import { useGetTeamCoachTrophiesQuery } from "../../../store/api/teamSlice";
import Team from "../Style";

const CoachTrophies = ({ coach }) => {
  const { data, isSuccess, isError } = useGetTeamCoachTrophiesQuery(coach?.id);

  let content;
  if (isError || data?.data?.[0] === undefined) content = null;
  else if (isSuccess)
    content = (
      <Team.Coach.Col>
        <Team.Coach.Title>Trophies:</Team.Coach.Title>
        {data?.data?.map((trophy) => (
          <Team.Coach.Col key={trophy?.place + trophy?.season + trophy?.league}>
            {trophy?.country +
              " : " +
              trophy?.place +
              " In " +
              trophy?.season +
              " " +
              trophy?.league}
          </Team.Coach.Col>
        ))}
      </Team.Coach.Col>
    );

  return <section>{content}</section>;
};

export default CoachTrophies;
