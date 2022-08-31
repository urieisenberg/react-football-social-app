import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email is invalid")
    .required("Email is required")
    .min(6, "Email must be at least 6 characters")
    .max(255, "Email must be less than 255 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(1024, "Password must be less than 1024 characters"),
});

export default loginSchema;
