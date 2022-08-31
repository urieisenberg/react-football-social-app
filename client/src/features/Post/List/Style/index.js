import styled from "styled-components";
import Post from "./Post";
import Share from "./Share";

const List = styled.div.attrs((props) => ({
  className: "",
}))`
  text-align: center;
  align-items: center;
`;

List.Post = Post;
List.Share = Share;

export default List;
