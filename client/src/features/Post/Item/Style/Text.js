import styled from "styled-components";

const Text = styled.div`
  margin-top: 35px;
  text-align: left;
  font-size: 18px;
  margin-left: 0.5em;
  font-weight: 500;
  letter-spacing: 0.5px;
  word-break: break-word;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Text;
