import { useParams, useNavigate } from "react-router-dom";
import { useGetInfoQuery } from "../../store/api/leagueSlice";
import League from "./Style";
import Transition from "../../components/Transition/Transition";

const Info = () => {
  const { leagueid } = useParams();
  const navigate = useNavigate();

  const { data, isSuccess, isError } = useGetInfoQuery(leagueid);

  let content;
  if (isError) content = null;
  else if (isSuccess && data)
    content = (
      <Transition key="leagueInfo">
        <League>
          <League.Info>
            {leagueid !== "135" && (
              <League.Info.Logo
                src={data?.data?.league?.logo}
                alt={data?.data?.league?.country}
              />
            )}
            <League.Info.Title onClick={() => navigate(`/league/${leagueid}`)}>
              {data?.data?.league?.name}
            </League.Info.Title>
            <League.Info.Country>
              {data?.data?.country?.name}
            </League.Info.Country>
            <League.Info.Flag
              src={data?.data?.country?.flag}
              alt={data?.data?.country?.name}
            />
          </League.Info>
        </League>
      </Transition>
    );

  return <section>{content}</section>;
};

export default Info;
