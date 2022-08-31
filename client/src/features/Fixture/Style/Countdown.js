import styled from "styled-components";

const Countdown = styled.div.attrs((props) => ({
  className: "row ",
}))`
  font-weight: bold;
`;

const Time = styled.div.attrs((props) => ({
  className: "col",
}))`
  color: ${(props) =>
    props.danger ? props.theme.error : props.theme.interactive};
  white-space: nowrap;
  @media (max-width: 992px) {
    font-size: 0.6rem;
  }
`;

const Text = styled.div.attrs((props) => ({
  className: "col",
}))`
  color: ${(props) =>
    props.danger ? props.theme.error : props.theme.interactive};
  font-size: 0.6rem;
  @media (max-width: 992px) {
    display: none;
  }
`;

const MiniText = styled.div.attrs((props) => ({
  className: "col",
}))`
  @media (min-width: 992px) {
    display: none;
  }
  color: ${(props) =>
    props.danger ? props.theme.error : props.theme.interactive};
  font-size: 0.5rem;
`;

Countdown.Time = Time;
Countdown.Text = Text;
Countdown.MiniText = MiniText;

export default Countdown;
