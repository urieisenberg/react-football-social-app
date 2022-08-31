import { createSlice } from "@reduxjs/toolkit";
import {
  createNote,
  getNotes,
  deleteNote,
  deleteAllNotes,
} from "./noteActions";

const initialState = {
  notes: [],
  error: false,
  loading: false,
  success: false,
  message: "",
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.notes = action.payload;
      })
      .addCase(getNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      })
      .addCase(createNote.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.notes.push(action.payload);
      })
      .addCase(createNote.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      })
      .addCase(deleteNote.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.notes.splice(
          state.notes.findIndex((note) => note._id === action.payload._id),
          1
        );
      })
      .addCase(deleteNote.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      })
      .addCase(deleteAllNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAllNotes.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.notes = [];
      })
      .addCase(deleteAllNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = noteSlice.actions;
export default noteSlice.reducer;
