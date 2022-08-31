import styled from "styled-components";

const Name = styled.span`
  text-align: left;
  margin-left: 70px;
  font-size: 18px;
  letter-spacing: 0.5px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.interactive};
    font-weight: bold;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export default Name;
