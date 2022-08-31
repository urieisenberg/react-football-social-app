import styled from "styled-components";
import Bar from "../../../components/Bar/Bar";
import Transfers from "./Transfers";
import Coach from "./Coach";
import Statistics from "./Statistics";

const Team = styled.div.attrs({
  className: "container text-center",
})``;

Team.Info = Bar;
Team.Transfers = Transfers;
Team.Coach = Coach;
Team.Statistics = Statistics;

export default Team;
