import styled from "styled-components";
import { motion } from "framer-motion";

const Stadium = styled.div.attrs({
  className: "container text-center justify-content-center align-items-center",
})``;

const List = styled.div.attrs({
  className: "row row-cols",
})``;

const Item = styled(motion.div).attrs((props) => ({
  className: "col-auto mt-5 mb-5 m-auto text-center",
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.8 } },
  viewport: { once: true },
  whileHover: { scale: 1.1 },
  whileTap: {
    scale: 1.3,
    borderRadius: "6px",
  },
}))`
  border-radius: 10px;
  width: 180px;
  height: 150px;
`;

const Image = styled.img`
  width: 100%;
  opacity: 0.8;
  border-radius: 10px;
  cursor: pointer;
`;

const PageImage = styled.img`
  width: 400px;
  height: 250px;
  
`;

const Title = styled.h5`
  margin-bottom: 8px;
  margin-top: 8px;
`;

const Name = styled.span.attrs({
  className: "icon",
})`
  font-size: 0.8em;
`;

Stadium.List = List;
Stadium.Item = Item;
Stadium.Image = Image;
Stadium.Title = Title;
Stadium.PageImage = PageImage;
Stadium.Name = Name;

export default Stadium;
