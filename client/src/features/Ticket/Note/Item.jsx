import Note from "./Style";
import { BiX } from "react-icons/bi";

const Item = ({ note, ticketId, onDelete, onDeleteAll }) => {
  const handleDelete = () => {
    const noteId = note._id;
    onDelete({ ticketId: ticketId, noteId: noteId });
  };

  const handleDeleteAll = () => onDeleteAll(ticketId);

  return (
    <Note.Item>
      <>
        <Note.Item.DeleteAll onClick={handleDeleteAll}>
          Delete All <BiX />
        </Note.Item.DeleteAll>
        Note from
        <Note.Item.Name> {note.user}</Note.Item.Name>
        <Note.Item.DeleteOne onClick={handleDelete}>
          {" "}
          <BiX size={15} />
        </Note.Item.DeleteOne>
      </>
      <Note.Item.Text>{note.text}</Note.Item.Text>
      <Note.Item.Date>
        {new Date(note.createdAt).toLocaleString()}
      </Note.Item.Date>
    </Note.Item>
  );
};

export default Item;
