import { useParams, useNavigate } from "react-router-dom";
import { useGetStadiumsQuery } from "../../../store/api/stadiumSlice";
import { useGetInfoQuery } from "../../../store/api/leagueSlice";
import Stadium from "../Style";
import Loader from "../../../components/Loader/Loader";
import Transition from "../../../components/Transition/Transition";
import TopButton from "../../../components/Button/TopButton";

const List = () => {
  const { leagueid } = useParams();
  const navigate = useNavigate();

  const { data: leagueInfo } = useGetInfoQuery(leagueid);
  const country = leagueInfo?.data?.country?.name;

  const { data, isSuccess, isLoading } = useGetStadiumsQuery({
    country: country,
  });

  let content;
  if (isLoading || !leagueInfo) content = <Loader />;
  else if (isSuccess && data)
    content = (
      <Transition key="venues">
        <Stadium>
          <Stadium.Title>Stadiums From {country}</Stadium.Title>
          <Stadium.List>
            {data?.data?.map((stadium) => (
              <Stadium.Item
                onClick={() =>
                  navigate(`/league/${leagueid}/stadiums/${stadium?.id}`)
                }
                key={stadium?.id}
              >
                <Stadium.Image src={stadium?.image} alt={stadium?.name} />
                <Stadium.Name>
                  {" "}
                  {stadium?.name + " " + stadium?.city}
                </Stadium.Name>
              </Stadium.Item>
            ))}
          </Stadium.List>
          <TopButton />
        </Stadium>
      </Transition>
    );

  return <section>{content}</section>;
};

export default List;
