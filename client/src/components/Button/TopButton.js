import { AiOutlineArrowUp } from "react-icons/ai";

const TopButton = () => {
  const scrollTop = () => window.scrollTo({ top: 0 });

  return (
    <AiOutlineArrowUp
      size={30}
      style={{ cursor: "pointer" }}
      onClick={scrollTop}
    />
  );
};

export default TopButton;
