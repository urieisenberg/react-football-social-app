import { createSlice } from "@reduxjs/toolkit";
import {
  addPost,
  editPost,
  deletePost,
  getPost,
  getLikedPosts,
  getUserPosts,
  getAllPosts,
  likePost,
  searchPost,
  searchUserPosts,
  getTeamPosts,
} from "./postActions";

const initialState = {
  posts: [],
  post: {},
  userPosts: [],
  likedPosts: [],
  teamPosts: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(addPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts.push(action.payload);
        state.teamPosts.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.post = action.payload;
      })
      .addCase(editPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.post = null;
        state.posts.splice(
          state.posts.findIndex((post) => post.id === action.payload),
          1
        );
        state.likedPosts.splice(
          state.likedPosts.findIndex((post) => post.id === action.payload),
          1
        );
        state.userPosts.splice(
          state.userPosts.findIndex((post) => post.id === action.payload),
          1
        );
        state.teamPosts.splice(
          state.teamPosts.findIndex((post) => post.id === action.payload),
          1
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUserPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userPosts = action.payload;
      })
      .addCase(getUserPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(likePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts.map((post) =>
          post.likes._id === action.payload._id ? action.payload : post
        );
        state.likedPosts.map((post) =>
          post.likes._id === action.payload._id ? action.payload : post
        );
        state.userPosts.map((post) =>
          post.likes._id === action.payload._id ? action.payload : post
        );
        state.teamPosts.map((post) =>
          post.likes._id === action.payload._id ? action.payload : post
        );
      })
      .addCase(likePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(searchPost.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(searchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(searchUserPosts.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.userPosts = action.payload;
      })
      .addCase(searchUserPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getLikedPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLikedPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.likedPosts = action.payload;
      })
      .addCase(getLikedPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTeamPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeamPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.teamPosts = action.payload;
      })
      .addCase(getTeamPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
