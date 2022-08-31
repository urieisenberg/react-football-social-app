import Media from "./Style";
import TopButton from "../../components/Button/TopButton";

const Youtube = () => {
  return (
      <Media>
        <Media.Youtube>
          <Media.Youtube.Title>Highlights</Media.Youtube.Title>
          <Media.Youtube.Video src="https://www.youtube-nocookie.com/embed/videoseries?list=PLFTjYT0jsEKz-OMzEacE9GqZug6cB5eD2" />
          <Media.Youtube.HR />
          <Media.Youtube.Title>Top Goals</Media.Youtube.Title>
          <Media.Youtube.Video src="https://www.youtube-nocookie.com/embed/videoseries?list=PLFTjYT0jsEKzJ2Cgh-xDoWEA0fPWKTEB9" />
          <Media.Youtube.HR />
          <Media.Youtube.Title>Interviews</Media.Youtube.Title>
          <Media.Youtube.Video src="https://www.youtube.com/embed/videoseries?list=PLFTjYT0jsEKwLtHuVj0JD-Tejmqe2X8Vf" />
         
        </Media.Youtube><TopButton />
      </Media> 
  );
};

export default Youtube;
