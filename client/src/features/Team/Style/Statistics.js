import styled from "styled-components";

const Statistics = styled.div.attrs((props) => ({
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

const SubTitle = styled.span`
  font-size: 1rem;
  font-weight: bolder;
  letter-spacing: 0.1rem;

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const HR = styled.hr``;

Statistics.Value = Value;
Statistics.Type = Type;
Statistics.SubTitle = SubTitle;
Statistics.HR = HR;

export default Statistics;
