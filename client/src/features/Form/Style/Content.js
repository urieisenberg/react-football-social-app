import styled from "styled-components";
import { Form as BsForm } from "react-bootstrap";

const Content = styled(BsForm)`
aling-items: center;
display: block;
margin: 0 auto;
width: 30rem;
text-align: center;
padding 50px 30px 50px 30px;
letter -spacing: 1px;
border: none;
 background: transparent !important;
  color: ${(props) => props.theme.textColor} !important;

`;

export default Content;
