import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";
import { selectStyles } from "./Style/Select";
import Form from "./Style";
import Options from "./Style/Options";
import { GiSoccerBall } from "react-icons/gi";

const SelectForm = ({ options, type, errors }) => {
  const { control } = useFormContext();
  return (
    <Form.Group>
      <Form.Label column>
        <GiSoccerBall size={22} />
      </Form.Label>
      <Form.Col>
        <Controller
          name="team"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Select
              options={options}
              onChange={(e) => onChange(e)}
              styles={selectStyles}
              onBlur={onBlur}
              menuPosition="auto"
              menuPlacement="top"
              isSearchable={false}
              placeholder="Select your team"
              className={`${errors && "is-invalid"}`}
              getOptionLabel={(team) => (
                <Options>
                  <img src={team.logo} alt={team.name} width="30" height="30" />
                  <span>{team.name}</span>
                </Options>
              )}
            />
          )}
        />
        <Form.Error>{errors && errors.message}</Form.Error>
      </Form.Col>
    </Form.Group>
  );
};

export default SelectForm;
