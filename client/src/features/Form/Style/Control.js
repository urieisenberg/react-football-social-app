import styled from "styled-components";
import Form from "react-bootstrap/Form";

const Control = styled(Form.Control).attrs((props) => ({
  autoComplete: "off",
}))`
  border-radius: 0px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 0px;
  margin-bottom: 10px;
  letter-spacing: 1px;
  margin: auto;
  padding: 5px 10px 2px 25px;
  box-shadow: 0 0 0 transparent;
  border: none;
  border-bottom: 1px solid #212529 0, 0, 0, 0.1;
  display: inline-block;

  background: transparent !important;
  color: ${(props) => props.theme.textColor} !important;

  &:focus {
    outline: none !important;
    border: 0 !important;
    border-bottom: 1px solid #212529 0, 0, 0, 0.1;
    border-color: transparent !important;
    background-color: transparent !important;
  }
  &:active {
    outline: none !important;
    border-bottom: 1px solid #212529 0, 0, 0, 0.1;
    border: none !important;
  }

  ::placeholder {
    font-weight: 700;
  }

  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
    letter-spacing: 2px;
  }
`;

export default Control;
