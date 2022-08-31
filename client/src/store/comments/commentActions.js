import { createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "./commentService";

export const addComment = createAsyncThunk(
  "comments/add",
  async ({ commentText, postId }, thunkAPI) => {
    try {
      return await commentService.addComment(commentText, postId);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/delete",
  async ({ postId, commentId }, thunkAPI) => {
    try {
      return await commentService.deleteComment(postId, commentId);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
