import styled from "styled-components";

const Post = styled.div`
  margin: auto;
  display: flex;
`;

const Container = styled.div`
  display: grid;
  height: 100%;
  place-items: center;
  width: 100%;
`;

const NotFound = styled.h1.attrs((props) => ({
  className: "mt-4",
}))``;

const H4 = styled.h4.attrs((props) => ({
  className: "text-center",
}))`
  margin-top: 20px;
`;

const Select = styled.div`
  position: absolute;
  margin-top: 40px;
`;

const Title = styled.h5`
  letter-spacing: 1px;
`;

Post.Container = Container;
Post.NotFound = NotFound;
Post.H4 = H4;
Post.Title = Title;
Post.Select = Select;

export default Post;
