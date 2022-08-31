import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (username, thunkAPI) => {
    try {
      return await userService.getUser(username);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const followUser = createAsyncThunk(
  "auth/follow",
  async (id, thunkAPI) => {
    try {
      return await userService.followUser(id);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "auth/unfollow",
  async (id, thunkAPI) => {
    try {
      return await userService.unfollowUser(id);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getFollows = createAsyncThunk(
  "auth/getFollows",
  async (id, thunkAPI) => {
    try {
      return await userService.getFollows(id);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getFollowed = createAsyncThunk(
  "auth/getFollowed",
  async (id, thunkAPI) => {
    try {
      return await userService.getFollowed(id);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async (id, thunkAPI) => {
    try {
      return await userService.deleteUser(id);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const saveFixture = createAsyncThunk(
  "auth/saveFixture",
  async ({ id, fixture }, thunkAPI) => {
    try {
      return await userService.saveFixture(id, {
        fixture: fixture,
      });
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getSavedFixtures = createAsyncThunk(
  "auth/getSavedFixtures",
  async (id, thunkAPI) => {
    try {
      return await userService.getSavedFixtures(id);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteFixture = createAsyncThunk(
  "auth/deleteFixture",
  async ({ id, fixture }, thunkAPI) => {
    try {
      return await userService.deleteFixture(id, fixture);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteAllFixtures = createAsyncThunk(
  "auth/deleteAllFixtures",
  async (id, thunkAPI) => {
    try {
      return await userService.deleteAllFixtures(id);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
