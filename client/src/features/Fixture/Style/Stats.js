import styled from "styled-components";

const Stats = styled.div.attrs((props) => ({
  className: "row",
}))`
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const Value = styled.div.attrs((props) => ({
  className: "col",
}))``;

const Type = styled.div.attrs((props) => ({
  className: "col",
}))``;

Stats.Value = Value;
Stats.Type = Type;

export default Stats;
