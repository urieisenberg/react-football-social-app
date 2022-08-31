import styled from "styled-components";
import { motion } from "framer-motion";

const List = styled.div.attrs((props) => ({
  className: "row row-cols justify-content-center",
}))``;

const Title = styled.h4.attrs((props) => ({
  className: "text-center",
}))`
  margin-top: 20px;
`;

const Col = styled(motion.div).attrs((props) => ({
  className: "col mt-5 mb-5 text-center",
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.9 } },
  viewport: { once: true },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 1.3 },
}))`
  max-width: 300px;
  width: 100%;
`;

const Fixture = styled.div`
  curso: pointer;
`;

const Img = styled.img.attrs((props) => ({
  className: "img-fluid",
}))`
  width: 40px;
`;

const Subtitle = styled.div.attrs((props) => ({
  className: "text-center fw-bold mb-2",
}))`
  letter-spacing: 1px;
`;

const Date = styled.div.attrs((props) => ({
  className: "text-center text-muted",
}))``;

const Delete = styled.span`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.error};
    scale: 1.1;
  }
`;

List.Title = Title;
List.Col = Col;
List.Fixture = Fixture;
List.Img = Img;
List.Title = Title;
List.Subtitle = Subtitle;
List.Date = Date;
List.Delete = Delete;

export default List;
