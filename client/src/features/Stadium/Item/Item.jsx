import { useParams } from "react-router-dom";
import { useGetStadiumQuery } from "../../../store/api/stadiumSlice";
import Stadium from "../Style";
import Loader from "../../../components/Loader/Loader";
import Transition from "../../../components/Transition/Transition";

const Item = ({ teamVenue }) => {
  const { stadiumid } = useParams();

  const { data, isSuccess, isLoading } = useGetStadiumQuery(
    stadiumid || teamVenue
  );

  let content;
  if (isLoading) content = <Loader />;
  else if (!data?.data) content = <Stadium>No Stadium found</Stadium>;
  else if (isSuccess && data)
    content = (
      <Transition key="venue">
        <Stadium>
          <Stadium.Title>{data?.data?.name}</Stadium.Title>
          <Stadium.PageImage src={data?.data?.image} alt={data?.data?.name} />
          <Stadium.List>
            <Stadium.Title>Capacity: {data?.data?.capacity}</Stadium.Title>
            <Stadium.Title>Address: {data?.data?.address}</Stadium.Title>
            <Stadium.Title>City: {data?.data?.city}</Stadium.Title>
            <Stadium.Title>Country: {data?.data?.country}</Stadium.Title>
          </Stadium.List>
        </Stadium>
      </Transition>
    );

  return <section>{content}</section>;
};

export default Item;
