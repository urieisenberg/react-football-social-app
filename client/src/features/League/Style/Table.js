import styled from "styled-components";

const Table = styled.table.attrs((props) => ({
  className: "table-responsive",
}))`
  margin: 0 auto;
  width: 70%;
  text-align: center;
`;

const Link = styled.span.attrs({
  className: "icon",
})``;

const Select = styled.div``;

const Title = styled.h4``;

const TH = styled.th`
  padding: 5px;

  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bodyBg};
`;

const Img = styled.img`
  align-self: left;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const TD = styled.td`
  padding: 5px;
`;

const Body = styled.tbody``;

const TR = styled.tr`
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.bodyBg};
    background-color: ${(props) => props.theme.textColor};
  }
`;

const HR = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.textColor};
`;

const Head = styled.thead``;

const CurrentTeam = styled.tr`
  background-color: ${(props) => props.theme.interactive};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.bodyBg};
    background-color: ${(props) => props.theme.textColor};
  }
`;

Table.Link = Link;
Table.Select = Select;
Table.Title = Title;
Table.Img = Img;
Table.TH = TH;
Table.Head = Head;
Table.Body = Body;
Table.TD = TD;
Table.TR = TR;
Table.HR = HR;
Table.CurrentTeam = CurrentTeam;

export default Table;
