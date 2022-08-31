import styled from "styled-components";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { motion } from "framer-motion";

const Eyes = styled(motion.div).attrs((props) => ({
  whileHover: {
    scale: 0.95,
    transition: { duration: 0.2 },
    cursor: "pointer",
  },
  whileTap: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
}))`
  margin-bottom: "5px";
  margin-left: "10px";
  margin-right: "-8px";
  background-color: "transparent";
`;

const PasswordEyes = ({ showPassword, setShowPassword }) => {
  return (
    <Eyes>
      {showPassword ? (
        <GoEyeClosed onClick={setShowPassword} size={18} />
      ) : (
        <GoEye onClick={setShowPassword} size={18} />
      )}
    </Eyes>
  );
};

export default PasswordEyes;
