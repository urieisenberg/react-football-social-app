import styled from "styled-components";
import Badge from "react-bootstrap/Badge";

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 700px;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bodyBg};
  border-radius: 5px;
  text-align: center;
  padding: 10px 15px;
  @media (max-width: 700px) {
    max-width: 400px;
    font-size: 12px;
  }
`;

const Heading = styled.div`
  align-self: center;
  justify-self: center;
`;

const Status = styled(Badge)`
  justify-self: center;
  align-self: center;
  text-align: center;
  width: 50px;
  max-height: 20px;
  background: ${(props) =>
    props.status === "New"
      ? props.theme.success
      : props.status === "Open"
      ? props.theme.info
      : props.status === "Closed"
      ? props.theme.error
      : props.theme.subText} !important;
`;

Item.Heading = Heading;
Item.Status = Status;

export default Item;
