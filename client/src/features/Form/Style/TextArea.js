import styled from "styled-components";
import Form from "react-bootstrap/Form";

const TextArea = styled(Form.Control).attrs({
  as: "textarea",
  type: "textarea",
  rows: "3",
})`
  background-color: "transparent";
  border: "none";
`;

export default TextArea;
