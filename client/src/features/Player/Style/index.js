import styled from "styled-components";

const Players = styled.div.attrs((props) => ({
  className: "container text-center justify-content-center align-items-center",
}))`
  margin: 0 auto;
`;

const List = styled.div.attrs((props) => ({
  className: "row row-cols",
}))``;

const Player = styled.div.attrs((props) => ({
  className: "row row-cols-auto mb-4 mt-4 m-auto",
}))`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Line = styled.div.attrs((props) => ({
  className: "row",
}))``;

const Title = styled.h5``;

const SubTitle = styled.span`
  font-size: 1rem;
  font-weight: bolder;
  letter-spacing: 0.1rem;

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const Team = styled.span.attrs((props) => ({
  className: "icon",
}))`
`;

const Detail = styled.div``;

const Item = styled.div.attrs((props) => ({
  className: "col",
}))``;

const Bold = styled.span.attrs((props) => ({
  className: "font-weight-bold",
}))``;

const Img = styled.img`
  width: 150px;
  border-radius: 50%;
`;

const Rating = styled.span`
  background-color: ${(props) => props.theme.interactive};
  font-size: 0.9rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const HR = styled.hr``;

Players.List = List;
Players.Player = Player;
Players.Title = Title;
Players.SubTitle = SubTitle;
Players.Item = Item;
Players.Bold = Bold;
Players.Img = Img;
Players.Detail = Detail;
Players.Team = Team;
Players.Line = Line;
Players.Rating = Rating;
Players.HR = HR;

export default Players;
