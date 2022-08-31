import { useFormContext, Controller } from "react-hook-form";
import Form from "./Style";

const TextArea = ({ type, errors, placholder }) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={type}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Form.TextArea
            {...field}
            onBlur={field.onBlur}
            onChange={field.onChange}
            name={type}
            as="textarea"
            type="textarea"
            placeholder={placholder}
            rows="3"
            className={`form-control ${errors && "is-invalid"}`}
          />
        )}
      />
      <Form.Error>{errors?.message}</Form.Error>
    </>
  );
};

export default TextArea;
