import styled from "styled-components";
import { motion } from "framer-motion";

const Comment = styled(motion.div).attrs((props) => ({
  initial: {
    opacity: 0,
    y: "-10%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: "-10%",
    transition: {
      duration: 0.2,
    },
  },
}))`
  text-align: left;
  margin-top: 2rem;
  height: 100%;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Name = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 0.5em;

  &:hover {
    font-weight: 700;
  }
`;

const Share = styled.div.attrs((props) => ({}))`
  position: ${(props) => (props.place === true ? "absolute" : "relative")};
  bottom: ${(props) => (props.place === true ? "-40px !important" : "")};
  border: none;
  outline: none;
  align-items: left;
  display: flex;
  flex-direction: row;
  align-text: left;
  > input {
    background: transparent;
    border: none;
    outline: none;
    color: ${(props) => props.theme.textColor};
    font-size: 0.9rem;
  }
`;

const Icon = styled.span.attrs((props) => ({
  className: "icon",
}))``;

const Toggle = styled.div.attrs((props) => ({}))`
  position: absolute;
  right: 5px;
  top: 80px;

  @media only screen and (max-width: 750px) {
    top: 75px;
    font-size: 12px;
  }
`;

const Number = styled.span.attrs((props) => ({}))`
  font-size: 0.7rem;
  margin-right: 0.5em;
`;

const Delete = styled.span.attrs((props) => ({
  className: "icon",
}))`
  position: absolute;
  right: 2px;
`;

Comment.Name = Name;
Comment.Share = Share;
Comment.Icon = Icon;
Comment.Toggle = Toggle;
Comment.Number = Number;
Comment.Delete = Delete;

export default Comment;
