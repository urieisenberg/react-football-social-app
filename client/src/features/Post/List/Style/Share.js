import styled from "styled-components";
import { motion } from "framer-motion";
import Form from "react-bootstrap/Form";

const Share = styled.div`
  position: relative;
  display: inline-flex;
  margin-bottom: 20px !important;
  max-height: 100%;
  background-color: ${(props) => props.theme.bodyBg};
  color: ${(props) => props.theme.textColor};
  box-shadow: 0 8px 32px 0 rgba(127, 170, 240, 0.37);
  border-radius: 10px;
  &:active {
    box-shadow: 0 8px 32px 0 rgba(127, 170, 240, 0.37);
    border-radius: 10px;
  }
  &:focus {
    box-shadow: 0 8px 32px 0 rgba(127, 170, 240, 0.37);
    border-radius: 10px;
  }
`;

const Input = styled(Form.Control)`
  width: 300px;
  height: 40px;
  margin-top: 20px;
  margin-right: 0.5em;
  margin-left: 0.5em;
  background-color: ${(props) => props.theme.bodyBg};
  color: ${(props) => props.theme.textColor};
  border: none;
  outline: none;
  overflow: hidden;
  resize: none;

  @media only screen and (max-width: 750px) {
    width: 90%;
  }
`;

const Submit = styled(motion.button).attrs((props) => ({
  whileHover: props.disabled ? "" : { scale: 1.05 },
  whileTap: props.disabled ? "" : { scale: 1.1 },
}))`
  border: none;
  margin-top: 20px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  color: ${(props) =>
    props.disabled ? props.theme.subColor : props.theme.interactive};
  background: transparent;
  height: 0.2em;
  margin-right: 0.5em;
  font-weight: ${(props) => (props.disabled ? "" : 500)};

  &:hover {
    font-weight: ${(props) => (props.disabled ? "" : "900")};
  }
`;

Share.Input = Input;
Share.Submit = Submit;

export default Share;
