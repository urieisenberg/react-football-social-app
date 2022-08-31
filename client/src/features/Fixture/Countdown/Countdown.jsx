import { useCountdown } from "../../../hooks/useCountdown";
import Fixtures from "../Style";

const Countdown = ({ gameDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(gameDate);
  let content;
  if (days + hours + minutes + seconds === 0) content = null;
  else
    content = (
      <>
        <Fixtures.Countdown>
          <Fixtures.Countdown.Time danger={days <= 3}>
            {days}
          </Fixtures.Countdown.Time>
          <Fixtures.Countdown.Time danger={days <= 3}>
            {hours}
          </Fixtures.Countdown.Time>
          <Fixtures.Countdown.Time danger={days <= 3}>
            {minutes}
          </Fixtures.Countdown.Time>
          <Fixtures.Countdown.Time danger={days <= 3}>
            {seconds}
          </Fixtures.Countdown.Time>
        </Fixtures.Countdown>
        <Fixtures.Countdown>
          <Fixtures.Countdown.Text danger={days <= 3}>
            {days === 1 ? "day" : "days"}
          </Fixtures.Countdown.Text>
          <Fixtures.Countdown.Text danger={days <= 3}>
            {hours === 1 ? "hour" : "hours"}
          </Fixtures.Countdown.Text>
          <Fixtures.Countdown.Text danger={days <= 3}>
            {minutes === 1 ? "minute" : "minutes"}
          </Fixtures.Countdown.Text>
          <Fixtures.Countdown.Text danger={days <= 3}>
            {seconds === 1 ? "second" : "seconds"}
          </Fixtures.Countdown.Text>
          <Fixtures.Countdown.MiniText danger={days <= 3}>
            d
          </Fixtures.Countdown.MiniText>
          <Fixtures.Countdown.MiniText danger={days <= 3}>
            h
          </Fixtures.Countdown.MiniText>
          <Fixtures.Countdown.MiniText danger={days <= 3}>
            m
          </Fixtures.Countdown.MiniText>
          <Fixtures.Countdown.MiniText danger={days <= 3}>
            s
          </Fixtures.Countdown.MiniText>
        </Fixtures.Countdown>
      </>
    );
  return <section> {content}</section>;
};

export default Countdown;
