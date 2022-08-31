import { createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

export const addPost = createAsyncThunk("posts/add", async (post, thunkAPI) => {
  try {
    return await postService.addPost({
      content: post.content,
      type: post.type,
    });
  } catch (err) {
    const message = err.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export const getAllPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      return await postService.getAllPosts();
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/edit",
  async ({ postId, updatedPost }, thunkAPI) => {
    try {
      return await postService.editPost(postId, updatedPost);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/delete",
  async (postId, thunkAPI) => {
    try {
      return await postService.deletePost(postId);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPost = createAsyncThunk(
  "posts/get",
  async (postId, thunkAPI) => {
    try {
      return await postService.getPost(postId);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserPosts = createAsyncThunk(
  "posts/getUser",
  async (username, thunkAPI) => {
    try {
      return await postService.getUserPosts(username);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/like",
  async (postId, { userId }, thunkAPI) => {
    try {
      return await postService.likePost(postId, userId);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const searchPost = createAsyncThunk(
  "posts/search",
  async ({ searchTerm }, thunkAPI) => {
    try {
      return await postService.searchPost(searchTerm);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getLikedPosts = createAsyncThunk(
  "posts/getLiked",
  async (username, thunkAPI) => {
    try {
      return await postService.getLikedPosts(username);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const searchUserPosts = createAsyncThunk(
  "posts/searchUser",
  async ({ username, searchTerm }, thunkAPI) => {
    try {
      return await postService.searchUserPosts(username, searchTerm);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTeamPosts = createAsyncThunk(
  "posts/getTeam",
  async (team, thunkAPI) => {
    try {
      return await postService.getTeamPosts(team);
    } catch (err) {
      const message = err.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
