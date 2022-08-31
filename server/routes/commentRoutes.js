const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  newComment,
  deleteComment,
} = require("../controllers/commentController");

const auth = require("../middleware/authMiddleware");

router.route("/").post(auth, newComment);

router.route("/:commentId").delete(auth, deleteComment);

module.exports = router;
