import { motion } from "framer-motion";

export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export const pageStyle = {
  position: "absolute",
};

const Transition = ({ children }) => {
  return (
    <motion.div
      transition={pageTransition}
      variants={pageVariants}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
