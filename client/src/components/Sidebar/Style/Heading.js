import styled from "styled-components";

const Heading = styled.span.attrs((props) => ({
  variants: {
    true: {
      opacity: 1,
      display: "flex",
      marginTop: "0.5rem",
      marginLeft: "0.5rem",
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    false: {
      display: "none",
    },
  },
}))``;

export default Heading;
