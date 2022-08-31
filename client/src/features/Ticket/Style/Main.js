import styled from "styled-components";
import { Row as BsRow, Col as BsCol } from "react-bootstrap";

const Main = styled.div`
  text-align: center;
  margin: auto;
  height: 100vh;
  justify-content: center;

  max-width: 900px;
`;

const Links = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Name = styled.h3`
  margin-bottom: 50px;
`;

const P = styled.span`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  font-size: 20px;
  margin-bottom: 50px !important;
`;

const Row = styled(BsRow)``;
const Col = styled(BsCol).attrs((props) => ({}))`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;

Main.Links = Links;
Main.Name = Name;
Main.P = P;
Main.Row = Row;
Main.Col = Col;

export default Main;
