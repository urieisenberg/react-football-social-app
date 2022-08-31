import { motion } from "framer-motion";
import styled from "styled-components";
import { GiSoccerBall } from "react-icons/gi";

const LoadingWrapper = styled.div`
  margin: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidde;
  overflow: hidden;
`;

const LoadingContainer = styled(motion.div).attrs((props) => ({
  variants: {
    initial: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
}))`
  width: 10rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
`;

const LoadingCircle = styled(motion.span).attrs((props) => ({
  variants: {
    initial: {
      y: "0%",
    },
    animate: {
      y: "100%",
    },
  },
  transition: {
    duration: 1.4,
    repeat: Infinity,
    ease: "easeInOut",
  },
}))`
  display: block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const Loader = () => {
  return (
    <LoadingWrapper>
      <LoadingContainer initial="initial" animate="animate">
        <LoadingCircle>
          <GiSoccerBall size={50} />
        </LoadingCircle>
        <LoadingCircle>
          <GiSoccerBall size={50} />
        </LoadingCircle>
        <LoadingCircle>
          <GiSoccerBall size={50} />
        </LoadingCircle>
      </LoadingContainer>
    </LoadingWrapper>
  );
};

export default Loader;
