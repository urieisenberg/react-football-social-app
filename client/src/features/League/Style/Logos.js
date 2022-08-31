import styled from "styled-components";

const Logos = styled.div.attrs({
  className: "container align-items-center text-center justify-content-center ",
})``;

const List = styled.div.attrs({
  className: "row-auto",
})``;

const Team = styled.img.attrs((props) => ({
  whileTap: {
    scale: 1.3,
  },
  whileHover: {
    scale: 1.1,
  },
  animate: "scale",
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 10,
    mass: 1,
  },
  className: "col-auto",
}))`
  width: 35px;

  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 992px) {
    width: 30px;
  }

  @media (max-width: 650px) {
    width: 25px;
  }
`;

Logos.List = List;
Logos.Team = Team;

export default Logos;
