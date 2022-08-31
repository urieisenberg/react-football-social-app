import styled from "styled-components";

const Item = styled.div`
  width: 100%;
  font-size: 14px;
  border-bottom: 1px solid ${(props) => props.theme.warning};
`;

const Name = styled.span`
  font-weight: bold;
`;

const Text = styled.div`
  font-size: 14px;
`;

const DeleteAll = styled.span`
  right: 0;
  top: -15px;
  cursor: pointer;
  font-size: 10px;
  position: absolute;
  &:hover {
    color: ${(props) => props.theme.error};
  }
`;
const DeleteOne = styled.span`
  color: ${(props) => props.theme.error};
  margin-right: 100px;
  cursor: pointer;
`;
const Date = styled.span.attrs({
  className: "text-muted",
})`
  font-size: 12px;
`;

Item.Name = Name;
Item.Text = Text;
Item.DeleteAll = DeleteAll;
Item.DeleteOne = DeleteOne;
Item.Date = Date;

export default Item;
