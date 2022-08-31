import styled from "styled-components";

const Post = styled.div`
  position: relative;
  height: 100%;
  background-color: ${(props) => props.theme.bodyBg};
  color: ${(props) => props.theme.textColor};
  background-clip: border-box;
  box-shadow: 0 2px 20px 0 rgba(127, 170, 240, 0.37);
  border-radius: 10px;
`;

export default Post;
