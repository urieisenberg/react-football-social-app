import { motion } from "framer-motion";
import Outline from "./Style/Outline";

const Button = ({
  type,
  text,
  action,
  className,
  icon,
  variant,
  mini,
  disabled,
  noborder,
}) => {
  return (
    <Outline
      as={motion.button}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 1.3,
        borderRadius: "6px",
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10, mass: 1 }}
      variant={variant}
      className={className}
      onClick={action}
      type={type}
      noborder={noborder}
      mini={mini}
      disabled={disabled ? disabled : false}
    >
      {text} {icon}
    </Outline>
  );
};

export default Button;
