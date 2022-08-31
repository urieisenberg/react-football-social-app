import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const Toast = styled(ToastContainer).attrs((props) => ({
  position: "bottom-right",
  autoClose: 3600,
  hideProgressBar: true,
  pauseOnHover: true,
  draggable: true,
  closeOnClick: true,
}))`
  .Toastify__toast {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bodyBg};
    border-radius: 5px;
  }
  .Toastify__toast-body {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bodyBg};
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 0.5px;
  }
  .Toastify__close-button {
    color: ${(props) => props.theme.bodyBg};
  }
`;

export default Toast;
