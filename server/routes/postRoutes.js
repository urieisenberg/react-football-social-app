const express = require("express");
const router = express.Router();
const {
  createPost,
  getPosts,
  getUserPosts,
  updatePost,
  deletePost,
  likePost,
  getPostById,
  searchPosts,
  getLikedPosts,
  searchUserPosts,
  getTeamPosts,
} = require("../controllers/postController");
const auth = require("../middleware/authMiddleware");
const commentRouter = require("./commentRoutes");

router.use("/:postId/comments", commentRouter);

router.route("/").get(auth, getPosts).post(auth, createPost);

router.route("/:team").get(auth, getTeamPosts);

router.route("/search/:post?").get(auth, searchPosts);

router
  .route("/:id")
  .get(auth, getPostById)
  .put(auth, updatePost)
  .delete(auth, deletePost);

router.route("/:id/like").put(auth, likePost);

router.route("/:username/posts").get(auth, getUserPosts);
router.route("/:username/liked").get(auth, getLikedPosts);
router.route("/:username/search/:post?").get(auth, searchUserPosts);

module.exports = router;
