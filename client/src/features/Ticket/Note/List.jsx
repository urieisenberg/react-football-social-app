import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getNotes,
  deleteNote,
  deleteAllNotes,
} from "../../../store/notes/noteActions";
import Item from "./Item";
import Note from "./Style";
import Loader from "../../../components/Loader/Loader";
import Transition from "../../../components/Transition/Transition";

const Notes = () => {
  const { notes, isLoading } = useSelector((state) => state.notes);

  const dispatch = useDispatch();
  const { ticketid } = useParams();

  useEffect(() => {
    dispatch(getNotes(ticketid));
  }, [dispatch, ticketid, notes.length]);

  const onDeleteOne = (ticketid, noteId) =>
    dispatch(deleteNote(ticketid, noteId));

  const onDeleteAll = (ticketid) => dispatch(deleteAllNotes(ticketid));

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Transition key="notes">
            {" "}
            <Note>
              <Note.Content>
                {notes
                  .map((note) => (
                    <Item
                      key={note._id}
                      note={note}
                      ticketId={ticketid}
                      onDelete={onDeleteOne}
                      onDeleteAll={onDeleteAll}
                    />
                  ))
                  .reverse()}
              </Note.Content>
            </Note>{" "}
            <br />
          </Transition>
        </>
      )}
    </>
  );
};

export default Notes;
