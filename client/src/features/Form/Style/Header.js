import styled from "styled-components";
import Form from "react-bootstrap/Form";

const Header = styled(Form.Label).attrs((props) => ({}))`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 576px) {
    display: ${(props) => (props.display ? "block" : "none")};
  }
`;

const Text = styled(Form.Text)`
  font-size: 0.9rem !important;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.textColor};
  @media (min-width: 576px) {
    margin-bottom: 1rem;
  }
  @media (max-height: 500px) {
    display: none;
  }
`;

Header.Text = Text;

export default Header;
