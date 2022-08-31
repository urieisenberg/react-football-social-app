import { useFormContext, Controller } from "react-hook-form";
import { useToggle } from "../../hooks/useToggle";
import { AiOutlineUser } from "react-icons/ai";
import { GoLock, GoMail } from "react-icons/go";
import PasswordEyes from "./PasswordEyes";
import Form from "./Style";

const Input = ({ type, errors, placeholder }) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useToggle();

  const renderIcons = () => {
    switch (type) {
      case "email":
        return <GoMail size={20} />;
      case "username":
        return <AiOutlineUser size={20} />;
      case "password":
        return <GoLock size={20} />;
      default:
        return null;
    }
  };

  return (
    <Form.Group>
      <Form.Label column>{renderIcons()}</Form.Label>
      <Form.Col>
        <Form.InputGroup>
          <Controller
            name={type}
            defaultValue=""
            control={control}
            render={({ field }) => (
              <Form.Control
                {...field}
                name={type}
                type={
                  type === "password"
                    ? showPassword
                      ? "text"
                      : "password"
                    : type
                }
                className={`form-control ${errors && "is-invalid"}`}
                placeholder={"Enter your " + placeholder}
              />
            )}
          />
          {type === "password" ? (
            <PasswordEyes
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          ) : null}
          <Form.Error>{errors && errors.message}</Form.Error>
        </Form.InputGroup>
      </Form.Col>
    </Form.Group>
  );
};

export default Input;
