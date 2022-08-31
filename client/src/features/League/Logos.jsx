import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import teams from "../../db/teams";
import League from "./Style";

const Logos = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick = (team) => {
    let path;
    let teamPath = `/team/${team.id}/${team.name}`;
    if (pathname.includes("next")) {
      path = "fixtures/next";
    } else if (pathname.includes("last")) {
      path = "fixtures/last";
    } else if (pathname.includes("players")) {
      path = "players";
    } else if (pathname.includes("stadium")) {
      path = "stadium";
    } else if (pathname.includes("table")) {
      path = "standings";
    } else if (pathname.includes("social")) {
      path = "social";
    } else path = "";

    return navigate(`${teamPath}/${path}`);
  };

  return (
    <League>
      <League.Logos.List>
        {teams.map((team) => (
          <League.Logos.Team
            as={motion.img}
            key={team.id}
            src={team.logo}
            alt={team.name}
            onClick={() => onClick(team)}
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title={team.name}
          />
        ))}
      </League.Logos.List>
    </League>
  );
};

export default Logos;
