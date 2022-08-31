import styled from "styled-components";

const Content = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const B = styled.h5.attrs({
  className: "font-weight-bold",
})`
letter-spacing: 1px;
`;

const P = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
`;

const Icon = styled.span.attrs({
  className: "icon",
})``;

Content.B = B;
Content.P = P;
Content.Icon = Icon;

export default Content;
