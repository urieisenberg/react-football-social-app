import * as Yup from "yup";

const noteSchema = Yup.object().shape({
  text: Yup.string()
    .min(3, "Note Text must be at least 3 characters")
    .max(20, "Note Text must be less than 20 characters")
    .required("Note Text is required"),
});

export default noteSchema;
