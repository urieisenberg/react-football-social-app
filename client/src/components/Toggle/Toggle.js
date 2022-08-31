import styled from "styled-components";
import { motion } from "framer-motion";

const Toggle = styled(motion.button).attrs((props) => ({
  whileTap: { scale: 0.95, transition: { duration: 0.1 } },
  whileHover: { scale: 1.1, transition: { duration: 0.1, cursor: "pointer" } },
}))`
  color: ${(props) => props.theme.bgColor};
  position: absolute;
  top: 4px;
  right: 14px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  float: right;
  flex-direction: column;
  z-index: 1000;
`;

export default Toggle;
