import styled from "styled-components";
import Table from "./Table";
import Logos from "./Logos";
import Bar from "../../../components/Bar/Bar";

const League = styled.div.attrs({
  className: "container text-center",
})``;

League.Info = Bar;
League.Table = Table;
League.Logos = Logos;

export default League;
