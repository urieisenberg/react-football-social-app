import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  className: "form-control  m-auto text-center mt-2 mb-1",
}))`
  background-color: ${(props) => props.transparent === "true" && "transparent"};
  border: none;
  max-width: 300px;
  @media (max-width: 600px) {
    max-width: 150px;
  }
`;
const Search = ({ placeholder, setSearch, search, transparent }) => {
  return (
    <Input
      onChange={setSearch}
      value={search}
      placeholder={placeholder}
      transparent={transparent}
    />
  );
};

export default Search;
