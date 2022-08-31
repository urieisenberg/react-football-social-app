import styled from "styled-components";

const Date = styled.div``;

const Created = styled.div.attrs((props) => ({
  className: "text-muted",
}))`
  top: 10px;
  font-size: 0.7rem;
  position: absolute;
  right: 10px;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const Updated = styled.span.attrs((props) => ({
  className: "text-muted",
}))`
  font-size: 0.6rem;
  position: absolute;
  top: 120px;
  right: 5px;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

Date.Created = Created;
Date.Updated = Updated;

export default Date;
