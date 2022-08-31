import styled from "styled-components";
import Facebook from "./Facebook";
import Youtube from "./Youtube";

const Media = styled.div.attrs((props) => ({
  className: " container mb-2",
}))`
  text-align: center;
`;

export const List = styled.div.attrs((props) => ({
  className: "container text-center align-items-center mb-2",
}))``;

Media.Facebook = Facebook;
Media.Youtube = Youtube;

export default Media;
