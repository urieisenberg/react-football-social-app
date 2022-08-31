import styled from "styled-components";

const Footer = styled.div`
  text-align: center;
  margin-top: 2rem;
  @media (max-width: 576px) {
    display: none;
  }
  @media (max-height: 500px) {
    display: none;
  }
`;

export default Footer;
