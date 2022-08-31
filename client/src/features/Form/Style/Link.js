import { Link as LinkRRD } from "react-router-dom";
import styled from "styled-components";

const Link = styled(LinkRRD)`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  margin-left: 5px;
  &:hover {
    color: ${(props) => props.theme.textColor};
    text-decoration: underline;
    font-weight: bolder;
  }
`;

export default Link;
