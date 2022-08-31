import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import noteSchema from "../../../schemas/noteSchema";
import { createNote } from "../../../store/notes/noteActions";
import TextArea from "../../Form/TextArea";
import Button from "../../../components/Button/Button";
import Loader from "../../../components/Loader/Loader";

const AddNote = ({ setShow }) => {
  const methods = useForm({
    resolver: yupResolver(noteSchema),
    mode: "all",
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const { isLoading } = useSelector((state) => state.notes);

  const dispatch = useDispatch();
  const { ticketid } = useParams();

  const onSubmit = (data) => {
    const text = data.text;
    dispatch(
      createNote({
        noteText: text,
        ticketId: ticketid,
      })
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextArea type="text" placeholder="Add note" />
            <Button
              type="submit"
              variant={errors.text ? "error" : "success"}
              action={setShow}
              text={errors.text ? "Close" : "Add Note"}
            />
          </form>
        </FormProvider>
      )}
    </>
  );
};

export default AddNote;
