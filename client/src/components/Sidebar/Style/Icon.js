import styled from "styled-components";

const Icon = styled.div.attrs((props) => ({
  variants: {
    true: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    false: {
      flexDirection: "column",
      alignItems: "center",
      marginTop: "0.4rem",
      marginLeft: "0.4rem",
      transition: {
        y: { stiffness: 1000 },
      },
    },
  },
}))`
  margin-left: 0.4rem;
  flex-direction: column;
  align-items: center;
  margin-top: 0.4rem;
  display: flex;
`;

export default Icon;
