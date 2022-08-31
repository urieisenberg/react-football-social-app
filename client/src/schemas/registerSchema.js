import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .required("User Name is required")
    .min(2, "User Name must be at least 2 characters")
    .max(20, "User Name must be less than 20 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid")
    .min(6, "Email must be at least 6 characters")
    .max(255, "Email must be less than 255 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(1024, "Password must be less than 1024 characters"),
  team: Yup.object().required("Please select a team"),
});

export default registerSchema;
