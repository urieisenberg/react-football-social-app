import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTicket } from "../../../store/tickets/ticketActions";
import { reset } from "../../../store/tickets/ticketSlice";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ticketSchema from "../../../schemas/ticketSchema";
import Form from "../../Form/Style";
import TextArea from "../../Form/TextArea";
import Transition from "../../../components/Transition/Transition";
import Loader from "../../../components/Loader/Loader";
import Button from "../../../components/Button/Button";
import { toast } from "react-toastify";
import { FaArrowRight } from "react-icons/fa";

const Create = () => {
  const methods = useForm({
    resolver: yupResolver(ticketSchema),
    mode: "all",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { user } = useSelector((state) => state.auth);

  const { isLoading } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    toast.success(`Ticket created successfully`, {
      autoClose: 1500,
      toastId: "create-ticket-success",
    });
    dispatch(createTicket(data));
    navigate("/contact/tickets");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Transition key="create-ticket">
            <FormProvider {...methods}>
              <Form typeOfForm="create">
                <Form.Content onSubmit={handleSubmit(onSubmit)}>
                  <Form.Header>
                    <h5>Create Ticket</h5>
                    <Form.Header.Text>
                      Please fill in the form below to create a new ticket.
                    </Form.Header.Text>
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
                        <option value="Feature Request">
                          {" "}
                          Feature Request{" "}
                        </option>
                        <option value="General Question">
                          {" "}
                          General Question{" "}
                        </option>
                        <option value="Other"> Other</option>
                      </Form.Select>
                      <Form.Error>
                        {errors.subject && errors.subject?.message}
                      </Form.Error>
                    </Form.InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <h5>Description</h5>
                    <Form.InputGroup>
                      <TextArea
                        type="description"
                        errors={errors.description}
                        placeholder="Description"
                      />
                    </Form.InputGroup>
                  </Form.Group>
                  <Button
                    noborder="true"
                    type="submit"
                    variant="success"
                    text="Submit"
                    icon={<FaArrowRight size="25px" />}
                  />
                </Form.Content>
              </Form>
            </FormProvider>
          </Transition>
        </>
      )}
    </>
  );
};

export default Create;
