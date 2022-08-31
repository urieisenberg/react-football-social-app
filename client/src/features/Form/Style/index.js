import styled from "styled-components";
import {
  Form as BsForm,
  Col as BsCol,
  Container as BsContainer,
  InputGroup as BsInputGroup,
} from "react-bootstrap";
import Header from "./Header";
import Content from "./Content";
import Control from "./Control";
import Error from "./Error";
import Footer from "./Footer";
import Link from "./Link";
import TextArea from "./TextArea";

const Form = styled.div`
  ${(props) =>
    props.typeOfForm === "auth" &&
    `height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidde;
  overflow: hidden;
`}
  ${(props) =>
    props.typeOfForm === "create" &&
    `
    margin: auto;
    height: 100vh;
    margin-right: 10px;
    display: flex;
    justify-content: center;
`}
`;

const Container = styled(BsContainer).attrs((props) => ({
  className: "h-100 d-flex align-items-center justify-content-center",
}))``;

const Label = styled(BsForm.Label).attrs((props) => ({
  sm: 2,
  className: "row",
}))``;

const InputGroup = styled(BsInputGroup)``;

const Col = styled(BsCol).attrs((props) => ({
  sm: 10,
}))``;

const Group = styled(BsForm.Group).attrs((props) => ({
  className: "row mt-4 mb-3",
}))``;

const Select = styled(BsForm.Select)`
  border: none;
`;

Form.Container = Container;
Form.Header = Header;
Form.Content = Content;
Form.Control = Control;
Form.Label = Label;
Form.Col = Col;
Form.Group = Group;
Form.InputGroup = InputGroup;
Form.Error = Error;
Form.Footer = Footer;
Form.Link = Link;
Form.Select = Select;
Form.TextArea = TextArea;

export default Form;
