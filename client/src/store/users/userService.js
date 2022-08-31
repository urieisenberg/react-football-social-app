import axios from "axios";

const API_URL = "/users/";

const getUser = async (username) => {
  const response = await axios.get(API_URL + username);
  return response.data;
};

const deleteUser = async (id) => {
  const response = await axios.delete(API_URL + id + "/ciao");
  if (response.data) {
    localStorage.clear();
  }
  return response.data;
};

const followUser = async (id) => {
  const response = await axios.put(API_URL + id + "/follow");
  if (response.data) {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    currentUser.follows.push(response.data);
    localStorage.setItem("user", JSON.stringify(currentUser));
  }
  return response.data;
};

const unfollowUser = async (id) => {
  const response = await axios.put(API_URL + id + "/unfollow");
  if (response.data) {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    currentUser.follows.splice(currentUser.follows.indexOf(response.data), 1);
    localStorage.setItem("user", JSON.stringify(currentUser));
  }
  return response.data;
};

const getFollows = async (id) => {
  const response = await axios.get(API_URL + id + "/follows");
  return response.data;
};

const getFollowed = async (id) => {
  const response = await axios.get(API_URL + id + "/followed");
  return response.data;
};

const saveFixture = async (id, fixture) => {
  const response = await axios.put(API_URL + id + "/fixture", fixture);
  return response.data;
};

const getSavedFixtures = async (id) => {
  const response = await axios.get(API_URL + id + "/fixtures");
  return response.data;
};

const deleteFixture = async (id, fixture) => {
  const response = await axios.delete(API_URL + id + "/fixture/" + fixture);
  return response.data;
};

const deleteAllFixtures = async (id) => {
  const response = await axios.delete(API_URL + id + "/fixtures");
  return response.data;
};

const userService = {
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
};

export default userService;
