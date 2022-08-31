import styled from "styled-components";

const Events = styled.div.attrs((props) => ({
  className: "row",
}))``;

const Event = styled.div.attrs((props) => ({
  className: "col",
}))``;

const Player = styled.div.attrs((props) => ({
  className: "col",
}))`
  font-size: 0.9rem;
  margin: 5px;

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
  
`;

const Title = styled.h5`
`;

const SubTitle = styled.span`
  font-size: 1rem;
  font-weight: bolder;
  letter-spacing: 0.1rem;

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;
const Rating = styled.span`
  background-color: ${(props) => props.theme.interactive};
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  margin-right: 0.5rem;
  color: #f2f2f2 !important;
  @media (max-width: 600px) {
    font-size: 0.6rem;
    font-weight: normal;
  }
`;

const HR = styled.hr``;

const Type = styled.p.attrs({
  className: "icon",
})``;

Events.Event = Event;
Events.Player = Player;
Events.Title = Title;
Events.SubTitle = SubTitle;
Events.Rating = Rating;
Events.HR = HR;
Events.Type = Type;

export default Events;
