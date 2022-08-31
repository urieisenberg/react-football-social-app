import { useParams, useNavigate } from "react-router-dom";
import { useGetTeamTransfersQuery } from "../../../store/api/teamSlice";
import Team from "../Style";
import Loader from "../../../components/Loader/Loader";
import Transition from "../../../components/Transition/Transition";
import { AiOutlineArrowRight } from "react-icons/ai";

const Transfers = ({ path }) => {
  const { teamid } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isSuccess } = useGetTeamTransfersQuery(teamid);

  let content;
  if (isLoading) content = <Loader />;
  else if (!data?.data?.in?.length && path === "in")
    content = <Team>No transfers found</Team>;
  else if (!data?.data?.out?.length && path === "out")
    content = <Team>No transfers found</Team>;
  else if (isSuccess)
    content = (
      <Transition key="transfers">
        <Team>
          <Team.Transfers>
            {path === "arrived" ? (
              <>
                {data?.data?.arrived?.map((player) => (
                  <Team.Transfers.In key={player?.player?.id}>
                    <Team.Transfers.Name
                      onClick={() =>
                        navigate(
                          `/team/${player?.transfers?.[0]?.teams?.in?.id}/${player?.transfers?.[0]?.teams?.in?.name}/players/${player?.player?.id}/`
                        )
                      }
                    >
                      {player?.player?.name}
                    </Team.Transfers.Name>
                    <Team.Transfers.Logo
                      onClick={() =>
                        navigate(
                          `/team/${player?.transfers?.[0]?.teams?.out?.id}/${player?.transfers?.[0]?.teams?.out?.name}`
                        )
                      }
                      src={player?.transfers?.[0]?.teams?.out?.logo}
                      alt={player?.transfers?.[0]?.teams?.out?.name}
                    />
                    <AiOutlineArrowRight size="30" />
                    <Team.Transfers.Logo
                      onClick={() =>
                        navigate(
                          `/team/${player?.transfers?.[0]?.teams?.in?.id}/${player?.transfers?.[0]?.teams?.in?.name}/players`
                        )
                      }
                      src={player?.transfers?.[0]?.teams?.in?.logo}
                      alt={player?.transfers?.[0]?.teams?.in?.name}
                    />
                    <Team.Transfers.Price>
                      {player?.transfers?.[0]?.type}
                    </Team.Transfers.Price>
                    <Team.Transfers.Date>
                      {player?.transfers?.[0]?.date}
                    </Team.Transfers.Date>
                  </Team.Transfers.In>
                ))}
              </>
            ) : (
              <>
                {data?.data?.left?.map((player) => (
                  <Team.Transfers.Out key={player?.player?.id}>
                    <Team.Transfers.Name
                      onClick={() =>
                        navigate(
                          `/team/${player?.transfers?.[0]?.teams?.in?.id}/${player?.transfers?.[0]?.teams?.in?.name}/players/${player?.player?.id}/2022`
                        )
                      }
                    >
                      {player?.player?.name}
                    </Team.Transfers.Name>
                    <Team.Transfers.Logo
                      onClick={() =>
                        navigate(
                          `/team/${player?.transfers?.[0]?.teams?.out?.id}/${player?.transfers?.[0]?.teams?.out?.name}`
                        )
                      }
                      src={player?.transfers?.[0]?.teams?.out?.logo}
                      alt={player?.transfers?.[0]?.teams?.out?.name}
                    />

                    <AiOutlineArrowRight size="30" />
                    <Team.Transfers.Logo
                      onClick={() =>
                        navigate(
                          `/team/${player?.transfers?.[0]?.teams?.in?.id}/${player?.transfers?.[0]?.teams?.in?.name}/players`
                        )
                      }
                      src={player?.transfers?.[0]?.teams?.in?.logo}
                      alt={player?.transfers?.[0]?.teams?.in?.name}
                    />
                    <Team.Transfers.Price>
                      {player?.transfers?.[0]?.type || "N/A"}
                    </Team.Transfers.Price>
                    <Team.Transfers.Date>
                      {player?.transfers?.[0]?.date}
                    </Team.Transfers.Date>
                  </Team.Transfers.Out>
                ))}
              </>
            )}
          </Team.Transfers>
        </Team>
      </Transition>
    );

  return <section>{content}</section>;
};

export default Transfers;
