import styled from "styled-components";

const Facebook = styled.iframe.attrs((props) => ({
  title: "facebook",
  scrolling: "no",
  width: "500",
  height: "500",
  frameborder: "0",
  allowFullScreen: true,
}))`
  border: none;
  @media (max-width: 576px) {
    width: 80%;
    overflow: scroll;
  }
`;

export default Facebook;
