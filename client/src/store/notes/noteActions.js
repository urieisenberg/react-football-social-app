import { createAsyncThunk } from "@reduxjs/toolkit";
import noteService from "./noteService";

export const getNotes = createAsyncThunk(
  "notes/getAll",
  async (ticketId, thunkAPI) => {
    try {
      return await noteService.getNotes(ticketId);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createNote = createAsyncThunk(
  "notes/create",
  async ({ noteText, ticketId }, thunkAPI) => {
    try {
      return await noteService.createNote(noteText, ticketId);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteNote = createAsyncThunk(
  "notes/delete",
  async ({ noteId, ticketId }, thunkAPI) => {
    try {
      return await noteService.deleteNote(ticketId, noteId);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteAllNotes = createAsyncThunk(
  "notes/deleteAll",
  async (ticketId, thunkAPI) => {
    try {
      return await noteService.deleteAllNotes(ticketId);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
