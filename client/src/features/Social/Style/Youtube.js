import styled from "styled-components";

const Youtube = styled.div.attrs((props) => ({
  className: "container",
}))`
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h5`
  text-align: center;
  margin-bottom: 1rem;
`;

const Video = styled.iframe.attrs((props) => ({
  title: "youtube",
  allowFullScreen: true,
  frameBorder: "0",
}))`
  width: 90%;
  height: 300px;
  @media (max-width: 672px) {
    width: 60%;
    height: 250px;
  }
`;

const HR = styled.hr``;

Youtube.Title = Title;
Youtube.Video = Video;
Youtube.HR = HR;

export default Youtube;
