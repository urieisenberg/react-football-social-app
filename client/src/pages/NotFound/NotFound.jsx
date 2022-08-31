import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Transition from "../../components/Transition/Transition";
import styled from "styled-components";
import { BiError } from "react-icons/bi";

const Container = styled.div.attrs({
  className:
    "container text-center align-items-center justify-content-center flex-column ",
})`
  > h1 {
    font-size: 3rem;
    letter-spacing: 1px;
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);

  return (
    <Transition>
      <Container>
        <BiError size="100" />
        <h1>Page not found</h1>
      </Container>
    </Transition>
  );
};

export default NotFound;
