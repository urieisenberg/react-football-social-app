import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ticketSchema from "../../../schemas/ticketSchema";
import { getTicket, updateTicket } from "../../../store/tickets/ticketActions";
import Form from "../../Form/Style";
import TextArea from "../../Form/TextArea";
import Button from "../../../components/Button/Button";
import Loader from "../../../components/Loader/Loader";
import Transition from "../../../components/Transition/Transition";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";

const Edit = () => {
  const methods = useForm({
    resolver: yupResolver(ticketSchema),
    mode: "all",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const { user } = useSelector((state) => state.auth);
  const { ticket, isLoading } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ticketid } = useParams();

  useEffect(() => {
    dispatch(getTicket(ticketid));
  }, [dispatch, ticketid]);

  useEffect(() => {
    reset(ticket);
  }, [reset, ticket]);

  const onSubmit = (data) => {
    const updatedTicket = {
      subject: data.subject,
      description: data.description,
    };
    dispatch(
      updateTicket({
        ticketId: ticketid,
        ticketData: updatedTicket,
      })
    );
    toast.success(`Ticket updated successfully`, {
      autoClose: 1500,
      toastId: "update-ticket-success",
    });
    
    navigate(`/contact/ticket/${ticketid}`);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Transition key="edit-ticket">
          <FormProvider {...methods}>
            <Form typeOfForm="create">
              <Form.Content onSubmit={handleSubmit(onSubmit)}>
                <Form.Header>
                  <h5>Edit {ticket.subject} Ticket</h5>
                </Form.Header>
                <br />
                <span className=" text-muted">
                  User: <b>{user.username}</b>
                </span>
                <br />
                <span className="text-muted">
                  Email: <b>{user.email}</b>
                </span>
                <Form.Group>
                  <h5>Subject</h5>
                  <Form.InputGroup>
                    <Form.Select
                      name="subject"
                      {...register("subject")}
                      type="subject"
                      className={`form-control ${
                        errors.subject && "is-invalid"
                      }`}
                    >
                      <option>Select a subject</option>
                      <option value="Bug">Bug</option>
                      <option value="Feature Request"> Feature Request</option>
                      <option value="General Question">General Question</option>
                      <option value="Other"> Other</option>
                    </Form.Select>
                    <Form.Error>
                      {errors.subject && errors.subject?.message}
                    </Form.Error>
                  </Form.InputGroup>
                </Form.Group>{" "}
                <Form.Group>
                  <h5>Description</h5>
                  <Form.InputGroup>
                    <TextArea
                      type="description"
                      errors={errors.description}
                      placeholder="Description"
                    />
                  </Form.InputGroup>
                </Form.Group>{" "}
                <Button
                  type="submit"
                  variant="success"
                  text="Update Ticket"
                  icon={<FaArrowRight size="25px" />}
                />
              </Form.Content>
            </Form>
          </FormProvider>
        </Transition>
      )}
    </>
  );
};

export default Edit;
