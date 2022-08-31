import { useParams, useNavigate } from "react-router-dom";
import { useGetTeamCoachQuery } from "../../../store/api/teamSlice";
import Team from "../Style";
import CoachTrophies from "./CoachTrophies";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";

const Coach = () => {
  const { teamid } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isSuccess } = useGetTeamCoachQuery(teamid);

  let content;
  if (isLoading) content = <Loader />;
  else if (isSuccess && data?.data)
    content = (
      <Transition key="coach">
        <Team>
          {data?.data?.map((coach) => (
            <Team.Coach key={coach?.id}>
              <Team.Coach.Col>
                <Team.Coach.Title>
                  {coach?.firstname + " " + coach?.lastname}
                </Team.Coach.Title>
              </Team.Coach.Col>
              <Team.Coach.Col>
                <Team.Coach.Img src={coach?.photo} alt={coach?.name} />
              </Team.Coach.Col>
              <Team.Coach.Col>Age: {coach?.age}</Team.Coach.Col>
              <Team.Coach.Col>Nationality: {coach?.nationality}</Team.Coach.Col>
              <Team.Coach.Col>
                <Team.Coach.Col>Born: {coach?.birth?.date}</Team.Coach.Col>
                <Team.Coach.Col>City: {coach?.birth?.place}</Team.Coach.Col>
                <Team.Coach.Col>
                  Country: {coach?.birth?.country}
                </Team.Coach.Col>
              </Team.Coach.Col>
              <Team.Coach.Col>
                <Team.Coach.HR />
                <Team.Coach.Title>Career:</Team.Coach.Title>
                {coach?.career?.map((team) => (
                  <Team.Coach.Col key={team?.start}>
                    <Team.Coach.Team
                      onClick={() =>
                        navigate(`/team/${team?.team?.id}/${team?.team?.name}`)
                      }
                    >
                      {team?.team?.name}
                    </Team.Coach.Team>
                    From {team?.start}  till{" "}
                    {team?.end === null ? " present" : team?.end}
                  </Team.Coach.Col>
                ))}
                <Team.Coach.HR />
              </Team.Coach.Col>
              <CoachTrophies coach={coach} />
            </Team.Coach>
          ))}
        </Team>
      </Transition>
    );
  return <section>{content}</section>;
};

export default Coach;
