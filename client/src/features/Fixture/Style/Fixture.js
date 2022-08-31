import styled from "styled-components";
import { motion } from "framer-motion";

const Fixture = styled(motion.div).attrs((props) => ({
  className: "row row-cols",
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.5 } },
  viewport: { once: true },
}))`
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  word-wrap: break-word;
`;

const Title = styled.h5``;

const SubTitle = styled.span`
  font-size: 1rem;
  font-weight: bolder;
  letter-spacing: 0.1rem;

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const League = styled.span.attrs({
  className: "text-muted",
})`
  font-size: 0.8rem;
`;

const Team = styled.div.attrs({
  className: "col",
})`
  font-size: 1.2rem;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Logo = styled.img`
  width: 100px;
  @media (max-width: 600px) {
    width: 50px;
  }
`;

const Span = styled.span.attrs({
  className: "icon",
})``;

const Event = styled.div.attrs((props) => ({
  className: "col",
}))`
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const Score = styled.div.attrs({
  className: "col",
})`
  align-self: center;
`;

const Goals = styled.h1`
  font-weight: bolder;
  font-size: 3.2rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.div.attrs({
  className: "row",
})``;

const Date = styled.div.attrs({
  className: "col",
})`
  font-size: 0.9rem;
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const Venue = styled.div.attrs({
  className: "col icon",
})`
  font-size: 0.9rem;
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const HR = styled.hr``;
const BR = styled.br``;

const H2H = styled.div.attrs({
  className: "icon text-muted",
})``;

const GameZone = styled.p.attrs({
  className: "icon",
})``;

Fixture.Title = Title;
Fixture.SubTitle = SubTitle;
Fixture.League = League;
Fixture.Team = Team;
Team.Home = Span;
Team.Away = Span;
Team.Logo = Logo;
Fixture.Content = Content;
Fixture.Date = Date;
Fixture.Referee = Date;
Fixture.Venue = Venue;
Fixture.Save = Venue;
Fixture.Unsave = Venue;
Fixture.Score = Score;
Score.Goals = Goals;
Fixture.HR = HR;
Fixture.BR = BR;
Fixture.H2H = H2H;
Fixture.GameZone = GameZone;

Fixture.Event = Event;

export default Fixture;
