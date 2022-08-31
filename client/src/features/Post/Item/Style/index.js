import styled from "styled-components";
import Post from "./Post";
import Date from "./Date";
import Comment from "./Comment";
import Follow from "./Follow";
import Actions from "./Actions";
import Like from "./Like";
import Name from "./Name";
import Content from "./Content";
import Text from "./Text";

const Item = styled.div.attrs((props) => ({}))`
  position: relative;
  padding: 2rem 2.5%;
  margin-bottom: 1rem;
`;

Item.Post = Post;
Item.Date = Date;
Item.Comment = Comment;
Item.Actions = Actions;
Item.Like = Like;
Item.Name = Name;
Item.Content = Content;
Item.Follow = Follow;
Item.Unfollow = Follow;
Item.Text = Text;

export default Item;
