import { BsX, BsCheck } from "react-icons/bs";

const Editable = ({ editable, setEditable, text, children, action }) => {
  const handleKey = (e) => {
    if (e.key === "Enter") {
      action();
    }
    if (e.key === "Escape") {
      setEditable(false);
    }
  };

  return (
    <section>
      {editable ? (
        <div onKeyDown={handleKey}>
          {children}
          <BsCheck
            onClick={() => {
              action();
            }}
            size={16}
            className="icon"
          />
          <BsX onClick={() => setEditable(false)} size={16} className="icon" />
        </div>
      ) : (
        <div onClick={() => setEditable(true)}>{text}</div>
      )}
    </section>
  );
};

export default Editable;
