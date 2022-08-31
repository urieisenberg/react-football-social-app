import styled from "styled-components";
import List from "./List"; 
import Content from "./Content";


const User = styled.div.attrs({
  className: "container",
})`
  text-align: center;
  align-items: center;
`;



const Title = styled.h4.attrs((props) => ({
  className: "text-center",
}))`
  margin-top: 20px;
`;

User.List = List;
User.Title = Title;
User.Delete = Content;
User.Content = Content;

export default User;
