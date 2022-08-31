import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GoHome } from "react-icons/go";
import Icon from "./Style/Icon";

const HomeButton = ({ size }) => {
  const navigate = useNavigate();

  return (
    <Icon onClick={() => navigate("/welcome")} home="true">
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
        <GoHome size={size} />
      </motion.div>
    </Icon>
  );
};

export default HomeButton;
