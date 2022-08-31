import styled from "styled-components";

const Actions = styled.div`
  top: 5px;
  position: absolute;
  right: -25px;

  .icon {
    cursor: pointer;
  }

  .icon:hover {
    transform: scale(1.1);
  }
`;

const Icon = styled.span.attrs((props) => ({
  className: "icon",
}))``;

Actions.Icon = Icon;

export default Actions;
