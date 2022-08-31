import { createSlice } from "@reduxjs/toolkit";
import {
  getUser,
  deleteUser,
  followUser,
  unfollowUser,
  getFollows,
  getFollowed,
  saveFixture,
  getSavedFixtures,
  deleteFixture,
  deleteAllFixtures,
} from "./userActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  follows: [],
  followed: [],
  userInfo: {},
  following: [],
  fixtures: [{}],
  fixtureSaved: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userInfo = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.userInfo = {};
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(followUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.following.push(action.payload);
      })
      .addCase(unfollowUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.following.splice(state.following.indexOf(action.payload), 1);
      })
      .addCase(getFollows.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getFollows.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.follows = action.payload;
        state.userInfo.follows = action.payload;
      })
      .addCase(getFollowed.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getFollowed.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.followed = action.payload;
        state.userInfo.followed = action.payload;
      })
      .addCase(saveFixture.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(saveFixture.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.fixtures.push(action.payload);
      })
      .addCase(saveFixture.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getSavedFixtures.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSavedFixtures.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.fixtures = action.payload;
      })
      .addCase(deleteFixture.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteFixture.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.fixtures.splice(state.fixtures.indexOf(action.payload), 1);
      })
      .addCase(deleteAllFixtures.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteAllFixtures.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.fixtures = [];
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
