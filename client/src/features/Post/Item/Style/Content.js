import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 100%;
  @media only screen and (max-width: 750px) {
    font-size: 0.9rem;
    width: 300px;
    height: 100%;
  }
`;

const Img = styled.img.attrs((props) => ({
  className: "mr-0",
}))`
  position: absolute;
  left: 0;
  width: 60px;
  height: 60px;
`;

Content.Img = Img;

export default Content;
