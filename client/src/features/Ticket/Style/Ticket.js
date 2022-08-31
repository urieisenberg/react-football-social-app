import styled from "styled-components";

const Ticket = styled.div`
  margin: auto;
  height: 100vh;
  display: flex;
  margin-top: -20px;
  @media (max-width: 700px) {
    max-width: 400px;
    font-size: 12px;
  }
`;

const Content = styled.div`
  justify-content: center;
  margin: 40px auto;
  max-width: 700px;
  @media (max-width: 700px) {
    max-width: 400px;
    font-size: 12px;
  }
`;

const Actions = styled.div`
  display: flex;
`;

const HR = styled.hr``;

const Container = styled.div``;


Ticket.Content = Content;
Ticket.Actions = Actions;
Ticket.HR = HR;
Ticket.Container = Container;

export default Ticket;
