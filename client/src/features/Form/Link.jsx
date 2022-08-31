import Form from "./Style";

const Link = ({ text, link, linkText }) => {
  return (
    <Form.Footer>
      {text}
      <Form.Link to={link}>{linkText}</Form.Link>
    </Form.Footer>
  );
};

export default Link;
