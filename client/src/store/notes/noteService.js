import axios from "axios";

const API_URL = "/tickets/";

const getNotes = async (ticketId) => {
  const response = await axios.get(API_URL + ticketId + "/notes");
  return response.data;
};

const createNote = async (noteText, ticketId) => {
  const response = await axios.post(API_URL + ticketId + "/notes", {
    text: noteText,
  });
  return response.data;
};

const deleteNote = async (ticketId, noteId) => {
  const response = await axios.delete(API_URL + ticketId + "/notes/" + noteId);
  return response.data;
};

const deleteAllNotes = async (ticketId) => {
  const response = await axios.delete(API_URL + ticketId + "/notes");
  return response.data;
};

const noteService = {
  getNotes,
  createNote,
  deleteAllNotes,
  deleteNote,
};

export default noteService;
