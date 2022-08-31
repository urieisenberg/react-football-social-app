import styled from "styled-components";

const Item = styled.div.attrs((props) => ({
  className: "",
}))``;

const Card = styled.div.attrs((props) => ({
  className: "col-auto mt-5 mb-5 m-auto text-center",
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.9 } },
  viewport: { once: true },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 1.3 },
}))`
  max-width: 200px;
  width: 100%;
`;

const Info = styled.div.attrs((props) => ({
  whileHover: { scale: 1.1 },
  whileTap: {
    scale: 1.3,
    borderRadius: "6px",
  },
}))`
  cursor: pointer;
  background-clip: border-box;
  box-shadow: 0 2px 20px 0 rgba(127, 170, 240, 0.37);
  border-radius: 20px;
  overflow: hidden;
  justify-content: center;

  margin-bottom: 10px !important;
`;

const Name = styled.div.attrs((props) => ({
  className: "text-center fw-bold mb-2",
}))`
  font-weight: bold;
  font-size: 1rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;

const Img = styled.img.attrs((props) => ({
  className: "img-fluid",
}))`
  overflow: hidden;
  width: 180px;
`;

const Logo = styled.img`
  width: 30px !important;
  height: 30px !important;
  margin-top: 10px;
  margin-right: 150px;
  position: absolute !important;
  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

const Date = styled.span.attrs((props) => ({
  className: "text-muted",
}))``;

Item.Card = Card;
Item.Info = Info;
Item.Name = Name;
Item.Img = Img;
Item.Logo = Logo;
Item.Date = Date;

export default Item;
