import styled from "styled-components";
import { Modal as BsModal } from "react-bootstrap";

const StyledModal = styled(BsModal).attrs({})`
  text-align: center;
  color: #000000;
  @media (max-width: 768px) {
    max-width: 300px;
    left: 25%;
    right: 25%;
  }
`;
const Body = styled(BsModal.Body).attrs({
  className: "justify-content-center align-items-center text-center",
})``;

const Modal = ({ show, setShow, title, children }) => {
  return (
    <StyledModal centered show={show} onHide={setShow}>
      <StyledModal.Header closeButton>
        <StyledModal.Title>{title}</StyledModal.Title>
      </StyledModal.Header>
      <Body>{children}</Body>
    </StyledModal>
  );
};

export default Modal;
