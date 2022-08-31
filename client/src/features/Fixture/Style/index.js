import styled from "styled-components";
import Fixture from "./Fixture";
import Countdown from "./Countdown";
import Events from "./Events";
import Stats from "./Stats";

const Fixtures = styled.div.attrs({
  className: "container text-center justify-content-center align-items-center",
})`

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

Fixtures.Fixture = Fixture;
Fixtures.Countdown = Countdown;
Fixtures.Events = Events;
Fixtures.Stats = Stats;

export default Fixtures;
