import * as Yup from "yup";

const ticketSchema = Yup.object().shape({
  subject: Yup.string()
    .oneOf(
      ["Bug", "General Question", "Feature Request", "Other"],
      "Subject is required"
    )
    .required(),
  description: Yup.string()
    .required("Description is required")
    .min(5, "Description must be at least 5 characters")
    .max(500, "Description must be less than 500 characters"),
});

export default ticketSchema;
