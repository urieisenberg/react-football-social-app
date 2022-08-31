import styled from "styled-components";

const Link = styled.div`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};

  &:hover {
    color: ${(props) => props.theme.textColor};
  }
`;

export default Link;
