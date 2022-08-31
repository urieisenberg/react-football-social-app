import { useNavigate } from "react-router-dom";
import Fixtures from "../Style";
import Transition from "../../../components/Transition/Transition";
import { GiSoccerBall } from "react-icons/gi";

const Events = ({ homeEvents, awayEvents, playersDataAvailable }) => {
  const navigate = useNavigate();

  let content;
  if (!homeEvents?.length && !awayEvents?.length) content = null;
  else
    content = (
      <Transition key="events">
        <Fixtures>
          <Fixtures.Events>
            <Fixtures.Events.HR />
            <Fixtures.Events.Event>
              {homeEvents?.map((event) => (
                <Fixtures.Events.Player
                  key={event?.time?.elapsed}
                  className={playersDataAvailable && "icon"}
                  onClick={() =>
                    playersDataAvailable &&
                    navigate(`/team/${event?.team?.id}/${event?.team?.name}/players/${event?.player?.id}
                        `)
                  }
                >
                  {event?.player?.name + " (" + event?.time?.elapsed + ") "}
                  {event?.type === "Goal" ? <GiSoccerBall /> : "🟥"}
                </Fixtures.Events.Player>
              ))}
            </Fixtures.Events.Event>
            <Fixtures.Events.Event></Fixtures.Events.Event>

            <Fixtures.Events.Event>
              {awayEvents?.map((event) => (
                <Fixtures.Events.Player
                  key={event?.time?.elapsed}
                  className={playersDataAvailable && "icon"}
                  onClick={() =>
                    playersDataAvailable &&
                    navigate(`/team/${event?.team?.id}/${event?.team?.name}/players/${event?.player?.id}
                        `)
                  }
                >
                  {event?.player?.name + " (" + event?.time?.elapsed + ") "}
                  {event?.type === "Goal" ? <GiSoccerBall /> : "🟥"}
                </Fixtures.Events.Player>
              ))}
            </Fixtures.Events.Event>
          </Fixtures.Events>
        </Fixtures>
      </Transition>
    );

  return content;
};

export default Events;
