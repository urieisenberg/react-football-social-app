import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useSearchStadiumsQuery } from "../../../store/api/stadiumSlice";
import Stadium from "../Style";
import Loader from "../../../components/Loader/Loader";
import Transition from "../../../components/Transition/Transition";
import TopButton from "../../../components/Button/TopButton";

const Search = () => {
  const { leagueid } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");

  const { data, isSuccess, isLoading } = useSearchStadiumsQuery(searchTerm);

  let content;
  if (isLoading) content = <Loader />;
  else if (!data?.data?.length) content = <Stadium>No Stadium Found</Stadium>;
  else if (isSuccess && data)
    content = (
      <Transition key="venuesResults">
        <Stadium>
          <Stadium.Title>
            Search results for <b>{searchTerm}</b>
          </Stadium.Title>
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
                  {stadium?.name + " " + stadium?.city}
                </Stadium.Name>
              </Stadium.Item>
            ))}
          </Stadium.List>
          {data?.data?.length > 10 && <TopButton />}
        </Stadium>
      </Transition>
    );
  return <section>{content}</section>;
};

export default Search;
