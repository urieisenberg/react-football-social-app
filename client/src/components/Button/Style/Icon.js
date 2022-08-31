import styled from "styled-components";

const IconButton = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: none;
  margin-left: ${(props) => (props.home === "true" ? "60px" : "")};
  float: left !important;
  flex-direction: column;
  top: 10px;
  left: 20px;
  position: absolute;
  width: 20px !important;
  font-size: 20px;
  text-decoration: none;
  background-color: transparent;
  z-index: 1000;
  color: ${(props) => props.theme.textColor};
  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.textColor};
    font-weight: 700;
  }
`;


export default IconButton;