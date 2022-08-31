import styled from "styled-components";

const List = styled.div.attrs({
  className: "text-center container",
})`
  margin: 0 auto;
  justify-content: center;

  max-width: 700px;
  @media (max-width: 900px) {
    width: 70%;
    font-size: 12px;
  }
  
`;

const Heading = styled.div`
  font-weight: 700;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bodyBg};
  border-radius: 5px;
  text-align: center;
  padding: 10px 15px;
`;

const NotFound = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 20px;
`;

List.Heading = Heading;
List.NotFound = NotFound;

export default List;
