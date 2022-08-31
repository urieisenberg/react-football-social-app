import styled from "styled-components";

const Item = styled.div.attrs((props) => ({
  whileHover: {
    scale: 1.1,
    cursor: "pointer",
  },
  whileTap: {
    scale: 0.95,
  },
  transition: {
    type: "none",
    duration: 0.1,
  },
}))`
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 10px;

  color: ${(props) => props.theme.textColor};

  &:hover {
    font-weight: bold;
    color: ${(props) => props.theme.interactive} ;
  }
`;

export default Item;
