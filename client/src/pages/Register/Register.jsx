import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { register as registerUser } from "../../store/auth/authActions";
import { reset } from "../../store/auth/authSlice";
import registerSchema from "../../schemas/registerSchema";
import teams from "../../db/teams";
import Transition from "../../components/Transition/Transition";
import { toast } from "react-toastify";
import { Form, Input, Select, Link } from "../../features/Form";
import { Button, HomeButton, BackButton } from "../../components/Button";
import Loader from "../../components/Loader/Loader";
import { FaArrowRight } from "react-icons/fa";

const Register = () => {
  const methods = useForm({
    resolver: yupResolver(registerSchema),
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
    dispatch(reset());
    if (isError) {
      toast.error(message, {
        toastId: "register-isError",
      });
    }
    if (user) {
      navigate("/league/135");
      toast.success(`Welcome ${user.username}`, {
        autoClose: 1500,
        toastId: "register-isSuccess",
      });
    }
    dispatch(reset());
  }, [isError, user, message, dispatch, navigate]);

  const onSubmit = (data) => {
    dispatch(registerUser(data));
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
                <h1>Join Us Today</h1>
                <Form.Header.Text>
                  Please fill out the form below and select a team to register
                </Form.Header.Text>
              </Form.Header>
              <Input
                type="username"
                placeholder="User Name"
                errors={errors.username}
              />
              <Input type="email" placeholder="Email" errors={errors.email} />
              <Input
                type="password"
                placeholder="Password"
                errors={errors.password}
              />
              <Select type="team" errors={errors.team} options={teams} />
              <Button
                type="submit"
                text="Sign Up"
                icon={<FaArrowRight size="25px" />}
              />
              <Link
                link="/welcome/login"
                text="Already have an account?"
                linkText="Login"
              />
            </Form.Content>
          </Form.Container>
        </Form>
      </FormProvider>
    </Transition>
  );
};

export default Register;
