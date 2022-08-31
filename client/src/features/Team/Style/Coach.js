import styled from "styled-components";

const Coach = styled.div.attrs((props) => ({
  className: "container text-center",
}))`
  margin-top: 10px;
`;

const Row = styled.div.attrs((props) => ({
  className: "row row-cols-auto",
}))`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.1rem;
`;

const Col = styled.div.attrs((props) => ({
  className: "col",
}))``;

const Title = styled.h5``;

const Img = styled.img`
  width: 140px;
  border-radius: 50%;
`;

const Team = styled.span.attrs((props) => ({
  className: "icon",
}))`
  font-weight: 550;
  margin-right: 5px;
`;


const HR = styled.hr``;

Coach.Row = Row;
Coach.Col = Col;
Coach.Title = Title;
Coach.Img = Img;
Coach.HR = HR;
Coach.Team = Team;

export default Coach;
