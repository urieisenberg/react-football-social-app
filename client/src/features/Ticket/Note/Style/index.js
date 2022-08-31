import styled from "styled-components";
import Item from "./Item";

const Note = styled.div`
  border: 1px solid ${(props) => props.theme.warning};
`;

const Content = styled.div`
  overflow: auto;
  height: 64px;
`;

Note.Content = Content;
Note.Item = Item;

export default Note;
