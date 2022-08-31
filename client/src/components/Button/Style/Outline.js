import styled from "styled-components";

const handleColors = (variant) => {
  if (variant === "primary") {
    return "#00a8ff";
  }
  if (variant === "secondary") {
    return "#00a8ff";
  }
  if (variant === "success") {
    return "#00a600";
  }
  if (variant === "warning") {
    return "#ff9100";
  }
  if (variant === "error") {
    return "#bf0000";
  }
  if (variant === "disabled") {
    return "#cfd8dc";
  }
  if (variant === "interactive") {
    return "#0071bc";
  }
};

const Outline = styled.button.attrs((props) => ({}))`
  cursor: pointer;
  border-radius: 5px;
  font-size: ${(props) => (props.mini === "true" ? "15px" : "20px")};
  font-weight: 500;
  align-items: center;
  padding: ${(props) => (props.mini === "true" ? "5px 5px" : "14px 28px")};
  max-width: ${(props) => (props.mini === "true" ? "60px !important" : "100%")};

  margin-right: 10px;
  margin-left:  10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 1px;  border: ${(props) =>
    props.noborder === "true" ? "none !important" : ""};
  background-color: ${(props) => props.theme.bodyBg};
  color: ${(props) =>
    props.variant ? handleColors(props.variant) : props.theme.textColor};
 
  border: ${(props) =>
    props.noborder === "true"
      ? "none"
      : "2px solid" + handleColors(props.variant)};


  &:hover {
    background-color: ${(props) =>
      props.variant ? handleColors(props.variant) : props.theme.textColor};
    color: ${(props) => (props.variant ? "#ffffff" : props.theme.bodyBg)};
    font-weight: 700;
  }


  @media (max-width: 600px) {
    padding: 2px 2px;
`;

export default Outline;
