import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTicket, closeTicket } from "../../../store/tickets/ticketActions";
import { reset } from "../../../store/tickets/ticketSlice";
import { useToggle } from "../../../hooks/useToggle";
import Notes from "../Note/List";
import AddNote from "../Note/Add";
import Contact from "../Style";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal";
import { toast } from "react-toastify";

const Ticket = () => {
  const { ticket, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ticketid } = useParams();

  const [showNoteModal, setShowNoteModal] = useToggle();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [isSuccess, dispatch]);

  useEffect(() => {
    dispatch(getTicket(ticketid));
  }, [dispatch, ticketid]);

  const onEdit = () => navigate(`/contact/ticket/${ticketid}/edit`);

  const onClose = () => {
    dispatch(closeTicket(ticketid));
    toast.success(`Ticket closed successfully`, {
      autoClose: 1500,
      toastId: "close-ticket-success",
    });
    navigate("/contact/tickets");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Contact.Ticket>
            <Contact.Ticket.Content>
              <Transition key="ticket">
                <Contact.Ticket.Container>
                  <span>Ticket ID: {ticket._id}</span>
                  <Contact.Ticket.HR />
                  <span>
                    Date Submitted:  {new Date(ticket.createdAt).toLocaleString()}
                  </span>
                  <Contact.Ticket.HR />
                  <span>
                    Status:{" "}
                    <Contact.Item.Status status={ticket.status}>
                      {ticket.status}
                    </Contact.Item.Status>
                  </span>
                  <Contact.Ticket.HR />
                  <span>Subject: {ticket.subject}</span>
                  <Contact.Ticket.HR />
                  <span>
                    Description:
                    <p>{ticket.description}</p>
                  </span>
                  <Contact.Ticket.HR />
                  Notes:
                  <Notes show={showNoteModal} setShow={setShowNoteModal} />
                </Contact.Ticket.Container>
                <Modal
                  centered
                  show={showNoteModal}
                  setShow={setShowNoteModal}
                  title="Add Note"
                  children={
                    <AddNote ticketId={ticketid} setShow={setShowNoteModal} />
                  }
                />
                <Contact.Ticket.Actions>
                  <Button
                    noborder="true"
                    action={setShowNoteModal}
                    text="Add Note"
                    varaint="warning"
                  />
                  <Button
                    noborder="true"
                    action={onEdit}
                    text="Edit Ticket"
                    variant="interactive"
                  />
                  <Button
                    noborder="true"
                    action={onClose}
                    text="Close Ticket"
                    variant="error"
                  />
                </Contact.Ticket.Actions>
              </Transition>
            </Contact.Ticket.Content>
          </Contact.Ticket>
        </>
      )}
    </>
  );
};

export default Ticket;
