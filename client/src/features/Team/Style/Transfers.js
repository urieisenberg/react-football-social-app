import styled from "styled-components";
import { motion } from "framer-motion";

const Transfers = styled.div.attrs((props) => ({
  className: "row row-cols",
}))``;

const In = styled(motion.div).attrs((props) => ({
  className: "col-auto mt-5 mb-5 m-auto text-center",
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.8 } },
  viewport: { once: true },
  whileHover: { scale: 0.9 },
}))`
  background-color: ${(props) => props.theme.interactive};
  border-radius: 10px;
  max-width: 200px;
  align-items: center;
  justify-content: center;
`;

const Out = styled(motion.div).attrs((props) => ({
  className: "col-auto mt-5 mb-5 m-auto text-center",
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.8 } },
  viewport: { once: true },
  whileHover: { scale: 0.9 },
}))`
  background-color: ${(props) => props.theme.error};
  border-radius: 10px;
  max-width: 200px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img.attrs(() => ({
  width: 50,
}))`
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Details = styled.span.attrs((props) => ({
  className: "col mb-1 mt-1",
}))``;

const Name = styled.div`
  font-weight: 500;
  cursor: pointer;
`;

const Price = styled.span`
  font-size: 1rem;
  margin:10px;
  font-weight: 600;
  
`;

const Date = styled.span``;

const BR = styled.br``;

Transfers.In = In;
Transfers.Out = Out;
Transfers.Logo = Logo;
Transfers.Name = Name;
Transfers.Details = Details;
Transfers.Price = Price;
Transfers.Date = Date;
Transfers.BR = BR;

export default Transfers;
