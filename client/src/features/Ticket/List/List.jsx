import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../../store/tickets/ticketSlice";
import { getTickets } from "../../../store/tickets/ticketActions";
import Item from "./Item";
import Contact from "../Style";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";
import TopButton from "../../../components/Button/TopButton";

const List = () => {
  const { user } = useSelector((state) => state.auth);
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [isSuccess, dispatch]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch, tickets.length]);

  let content;
  if (isLoading) content = <Loader />;
  else if (tickets.length === 0)
    content = <Contact.List.NotFound>No tickets found</Contact.List.NotFound>;
  else
    content = (
      <>
        {tickets
          .map((ticket) => {
            return <Item key={ticket?._id} ticket={ticket} />;
          })
          .reverse()}
      </>
    );

  return (
    <Transition key="tickets">
      <Contact.List>
        {user.username} Tickets
        <Contact.List.Heading>
          <div>Date</div>
          <div>Title</div>
          <div>Status</div>
          <div></div>
        </Contact.List.Heading>
        {content}
        {tickets.length > 5 && <TopButton />}
      </Contact.List>
    </Transition>
  );
};

export default List;
