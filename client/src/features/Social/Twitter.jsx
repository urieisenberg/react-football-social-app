import { useTwitter } from "../../hooks/useTwitter";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Loader from "../../components/Loader/Loader";
import Transition from "../../components/Transition/Transition";
import Media from "./Style";

const Twitter = () => {
  const { twitterPage, isLoading, twitterTheme } = useTwitter();


  let content;
  if (isLoading) content = <Loader />;
  else if (twitterPage)
    content = (
      <Transition key="twitter">
        <Media>
          <TwitterTimelineEmbed
            noBorder
            noFooter
            noHeader
            noBorders
            noScrollbar
            theme={twitterTheme}
            screenName={twitterPage}
            sourceType="profile"
            transparent
          />
        </Media>
      </Transition>
    );

  return <section>{content}</section>;
};

export default Twitter;
