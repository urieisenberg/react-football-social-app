import styled from "styled-components";

const Like = styled.div`
  position: absolute;
  right: 40px;
  top: 80px;
  @media only screen and (max-width: 750px) {
    top: 75px;
    font-size: 12px;
  }
`;


const Count = styled.span`
  margin-right: 0.5em;
  font-size: 0.7rem;
`;


const Icon = styled.span.attrs({
  className: "icon",
})``;

Like.Count = Count;
Like.Icon = Icon;

export default Like;
