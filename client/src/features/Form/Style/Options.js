import styled from "styled-components";

const Options = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    text-align: center !important;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bolder;
  }

  > span {
    margin-left: 5px;
  }
`;

export default Options;
