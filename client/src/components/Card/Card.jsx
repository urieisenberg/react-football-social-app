import { useNavigate, useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Item from "./Item";

const Card = ({ players, league, user, team, player }) => {
  const { teamid, teamname } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigateToPlayer = () => {
    navigate(
      `/team/${teamid || players?.statistics?.[0]?.team?.id}/${
        teamname || players?.statistics?.[0]?.team?.name
      }/players/${players?.player?.id || player?.id}`
    );
  };

  const navigateToProfile = () => {
    navigate(`/profile/${user?.username}/posts`);
  };

  const pathnames = (path) => {
    if (pathname.endsWith(path)) return true;
    else return false;
  };

  return (
    <Item.Card as={motion.div}>
      {pathnames("scorers") && (
        <Item.Name>{players?.statistics?.[0]?.goals?.total} Goals</Item.Name>
      )}
      {pathnames("assists") && (
        <Item.Name>
          {players?.statistics?.[0]?.goals?.assists} Assists
        </Item.Name>
      )}
      {pathnames("red") && (
        <Item.Name>{players?.statistics?.[0]?.cards?.red} Red Cards</Item.Name>
      )}
      {pathnames("yellow") && (
        <Item.Name>
          {players?.statistics?.[0]?.cards?.yellow} Yellow Cards
        </Item.Name>
      )}
      {pathnames("injuries") && (
        <>
          <Item.Date>
            {new Date(players?.fixture?.date).toLocaleDateString()}
          </Item.Date>
          <Item.Name>
            {players?.player?.reason}
            {players?.player?.reason === "Injury" && "🚑"}
            {players?.player?.reason === "Yellow Cards" && "🟨🟨"}
            {players?.player?.reason === "Red Card" && "🟥"}
            {players?.player?.reason === "Suspended" && "🔴"}
          </Item.Name>
        </>
      )}
      <Item.Info
        as={motion.div}
        onClick={user ? navigateToProfile : navigateToPlayer}
      >
        {league && (
          <Item.Logo src={players?.statistics[0]?.team?.logo} alt="" />
        )}
        <Item.Img
          src={players?.photo || players?.player?.photo || user?.image}
          alt={players?.name || players?.player?.name || user?.username}
        />
      </Item.Info>
      <Item.Name as={motion.span}>
        {players?.name || players?.player?.name || user?.username}
      </Item.Name>
    </Item.Card>
  );
};

export default Card;
