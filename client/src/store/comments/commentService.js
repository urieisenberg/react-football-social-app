import axios from "axios";

const API_URL = "/feed/";

const addComment = async (commentText, postId) => {
  const response = await axios.post(API_URL + postId + "/comments", {
    content: commentText,
  });
  return response.data;
};

const deleteComment = async (postId, commentId) => {
  const response = await axios.delete(
    API_URL + postId + "/comments/" + commentId
  );
  return response.data;
};

const commentService = {
  addComment,
  deleteComment,
};

export default commentService;
