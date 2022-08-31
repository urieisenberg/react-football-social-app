import axios from "axios";

const API_URL = "/feed/";

const addPost = async (post) => {
  const response = await axios.post(API_URL, post);
  return response.data;
};

const getAllPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const editPost = async (postId, updatedPost) => {
  const response = await axios.put(API_URL + postId, updatedPost);
  return response.data;
};

const deletePost = async (postId) => {
  const response = await axios.delete(API_URL + postId);
  return response.data;
};

const getPost = async (postId) => {
  const response = await axios.get(API_URL + postId);
  return response.data;
};

const likePost = async (postId, userId) => {
  const response = await axios.put(API_URL + postId + "/like", userId);
  return response.data;
};

const searchPost = async (searchTerm) => {
  const response = await axios.get(API_URL + "search/" + searchTerm);
  return response.data;
};

const getUserPosts = async (username) => {
  const response = await axios.get(API_URL + username + "/posts");
  return response.data;
};

const getLikedPosts = async (username) => {
  const response = await axios.get(API_URL + username + "/liked");
  return response.data;
};

const searchUserPosts = async (username, searchTerm) => {
  const response = await axios.get(
    API_URL + username + "/search/" + searchTerm
  );
  return response.data;
};

const getTeamPosts = async (team) => {
  const response = await axios.get(API_URL + team);
  return response.data;
};

const postService = {
  addPost,
  editPost,
  deletePost,
  getPost,
  getUserPosts,
  likePost,
  getAllPosts,
  searchPost,
  getLikedPosts,
  getTeamPosts,
  searchUserPosts,
};

export default postService;
