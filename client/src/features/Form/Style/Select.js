export const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    cursor: "pointer",
    border: "none",
    borderColor: state.isSelected ? "000000" : "transparent",
    left: state.isSelected ? "14px" : "16px",
    fontWeight: "bold",
    letterSpacing: "1px",
    margin: "auto",

    "@media (min-width: 576px)": {
      textAlign: "left",
    },
    "@media (max-width: 576px)": {
      width: "100%",
      textAlign: "center",
      letterSpacing: "2px",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "#ffffff",
    color: "#000000",
    fontWeight: state.isSelected ? "bold !" : "normal",
    cursor: "pointer",
    overflow: "hidden",
    "&:hover": {
      backgroundColor: "#000000",
      color: "#F2F2F2",
      fontWeight: "bolder",
      letterSpacing: "1px",
    },
    "@media (max-width: 576px)": {
      textAlign: "center",
      width: "100%",
      letterSpacing: "2px",
    },
    "@media (min-width: 576px)": {
      textAlign: "left",
    },
  }),
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 9999,
    height: "100vh",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
  menuList: (provided) => ({
    ...provided,
    "::-webkit-scrollbar": {
      width: "10px",
    },
    "::-webkit-scrollbar-track": {
      background: "#F2F2F2",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#000000",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#000000",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: (props) => props.theme.textColor,
    fontSize: "18px",
    "@media (max-width: 576px)": {
      textAlign: "center !important",
      width: "100%",
      letterSpacing: "2px",
    },
    "@media (min-width: 576px)": {
      textAlign: "left",
    },
  }),
};
