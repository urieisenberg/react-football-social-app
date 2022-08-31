import { useParams } from "react-router-dom";
import { useGetPlayerTrophiesQuery } from "../../../store/api/playerSlice";
import Players from "../Style";
import Transition from "../../../components/Transition/Transition";
import TopButton from "../../../components/Button/TopButton";

const Trophies = ({ player }) => {
  const { playerid } = useParams();

  const { data, isSuccess, isError } = useGetPlayerTrophiesQuery(playerid);

  let content;
  if (isError || !data?.data?.length) content = null;
  else if (isSuccess)
    content = (
      <Transition key="trophies">
        <Players>
          <Players.SubTitle>{player} History Achievements</Players.SubTitle>
          {data?.data?.map((trophy) => (
            <Players.Player key={trophy?.league + trophy?.season}>
              <Players.Item>
                {trophy?.country +
                  " : " +
                  trophy?.place +
                  " In " +
                  trophy?.season +
                  " " +
                  trophy?.league}
              </Players.Item>
            </Players.Player>
          ))}
        </Players>
        {data?.data?.length > 5 && <TopButton />}
      </Transition>
    );

  return content;
};

export default Trophies;
