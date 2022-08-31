import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TiArrowBack } from "react-icons/ti";
import Icon from "./Style/Icon";

const BackButton = ({ size, where }) => {
  const navigate = useNavigate();

  return (
    <Icon onClick={() => (where ? navigate(where) : navigate(-1))}>
      <motion.div
        transition={{ type: "spring", stiffness: 100, damping: 10, mass: 1 }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 1.3,
          borderRadius: "6px",
        }}
      >
        <TiArrowBack size={size} />
      </motion.div>
    </Icon>
  );
};

export default BackButton;

