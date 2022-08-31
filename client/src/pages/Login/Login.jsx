import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../store/auth/authActions";
import { reset } from "../../store/auth/authSlice";
import loginSchema from "../../schemas/loginSchema";
import Transition from "../../components/Transition/Transition";
import { toast } from "react-toastify";
import { Form, Input, Link } from "../../features/Form";
import { Button, HomeButton, BackButton } from "../../components/Button";
import Loader from "../../components/Loader/Loader";
import { FaArrowRight } from "react-icons/fa";

const Login = () => {
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    mode: "all",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        toastId: "login-isError",
      });
    }
    if (user) {
      toast.success(`Welcome Back ${user.username}`, {
        autoClose: 1500,
        toastId: "register-success",
      });
      navigate("/league/135");
    }
    dispatch(reset());
  }, [isError, user, message, dispatch, navigate]);

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  if (isLoading) return <Loader />;

  return (
    <Transition>
      <BackButton size="30" />
      <HomeButton size="30" />
      <FormProvider {...methods}>
        <Form typeOfForm="auth">
          <Form.Container>
            <Form.Content onSubmit={handleSubmit(onSubmit)}>
              <Form.Header>
                <h1>Login</h1>
                <Form.Header.Text>
                  Please enter your email and password to login to your account.
                </Form.Header.Text>
              </Form.Header>
              <Input type="email" placeholder="Email" errors={errors.email} />
              <Input
                type="password"
                placeholder="Password"
                errors={errors.password}
              />
              <br />
              <Button
                type="submit"
                text="Login"
                icon={<FaArrowRight size="25px" />}
              />
              <Link
                link="/welcome/register"
                text="Don't have an account?"
                linkText="Sign Up"
              />
            </Form.Content>
          </Form.Container>
        </Form>
      </FormProvider>
    </Transition>
  );
};

export default Login;
