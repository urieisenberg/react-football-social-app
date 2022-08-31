import Teams from "../Style";
import Transition from "../../../components/Transition/Transition";

const Info = ({ team }) => {
  return (
    <Transition key="teamInfo">
      <Teams>
        <Teams.Info>
          <Teams.Info.Logo src={team?.team?.logo} alt={team?.team?.name} />
          <Teams.Info.Title>
            {team?.team?.name + " since " + team?.team?.founded}
          </Teams.Info.Title>
          <Teams.Info.Country>
            {team?.venue?.city + " " + team?.team?.country}
          </Teams.Info.Country>
        </Teams.Info>
      </Teams>
    </Transition>
  );
};

export default Info;
