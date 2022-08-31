import styled from "styled-components";
import Form from "react-bootstrap/Form";

const Error = styled(Form.Control.Feedback).attrs((props) => ({
  type: "invalid",
}))`
  color: ${(props) => props.theme.error};
  font-weight: bold;
  font-size: 12px;
  text-align: left;
  display: inline-block;
  @media (max-width: 576px) {
    text-align: center;
    font-size: 10px;
    letter-spacing: 1px;
  }
  @media (min-width: 576px) {
    padding: 0px 0px 0px 25px;
    text-align: left;
  }
`;

export default Error;
