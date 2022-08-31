import Players from "../Style";
import Transition from "../../../components/Transition/Transition";

const Statistics = ({ stats }) => {
  const { league, cup, player } = stats;

  return (
    <Transition key="stats">
      <Players>
        <Players.HR />
        <Players.SubTitle>
          {player?.name +
            " statistics for " +
            league?.league?.name +
            " " +
            league?.league?.season +
            " season"}
        </Players.SubTitle>
        <Players.Player>
          <Players.Item>
            Appearances: {league?.games?.appearences || 0}
          </Players.Item>{" "}
          <Players.Item>Minutes Played: {league?.games?.minutes}</Players.Item>
          <Players.Item>Lineups: {league?.games?.lineups}</Players.Item>{" "}
          <Players.Item>
            Substitutions In: {league?.games?.substitutions?.in || 0}
          </Players.Item>
          <Players.Item>
            Substitutions Out: {league?.games?.substitutions?.out || 0}
          </Players.Item>
        </Players.Player>
        <Players.Player>
          {league?.games?.position === "Goalkeeper" ? (
            <>
              <Players.Item>Saves: {league?.goals?.saves || 0}</Players.Item>
              <Players.Item>
                Goals Conceded: {league.goals?.conceded || 0}
              </Players.Item>
            </>
          ) : (
            <>
              <Players.Item>Goals: {league?.goals?.total}</Players.Item>
              <Players.Item>
                Assists: {league?.goals?.assists || 0}
              </Players.Item>
            </>
          )}{" "}
          <Players.Item>Yellow Cards: {league?.cards?.yellow}</Players.Item>
          <Players.Item>Red Cards: {league?.cards?.red}</Players.Item>
        </Players.Player>
        <Players.Player>
          <Players.Item>Shots: {league?.shots?.total || 0}</Players.Item>
          <Players.Item>Shots on Target: {league?.shots?.on || 0}</Players.Item>
          <Players.Item>Passes: {league?.passes?.total || 0}</Players.Item>
          <Players.Item>
            Passes Accuracy: {league?.passes.accuracy || 0 + "%"}
          </Players.Item>
        </Players.Player>
        <Players.Player>
          <Players.Item>Fouls Drawn: {league?.fouls?.drawn || 0}</Players.Item>
          <Players.Item>
            Fouls Committed: {league?.fouls?.committed || 0}
          </Players.Item>
          <Players.Item>Duels: {league?.duels?.total || 0}</Players.Item>
          <Players.Item>Duels Won: {league?.duels?.won || 0}</Players.Item>
        </Players.Player>{" "}
        <Players.Player>
          <Players.Item>
            Dribbles: {league?.dribbles?.success || 0}
          </Players.Item>
          <Players.Item>Tackels: {league?.tackles?.total || 0}</Players.Item>
          <Players.Item>Blocks: {league?.tackles?.blocks || 0}</Players.Item>
          <Players.Item>
            Interceptions: {league?.tackles?.interceptions || 0}
          </Players.Item>
        </Players.Player>
        {league?.injuried === true && (
          <Players.SubTitle>🚑 Injuried</Players.SubTitle>
        )}
        {league?.games?.rating !== null && (
          <Players.Player>
            <Players.Item>
              Analysts Rating:{" "}
              <Players.Rating>{league?.games?.rating}</Players.Rating>
            </Players.Item>
          </Players.Player>
        )}
      </Players>
    </Transition>
  );
};

export default Statistics;
