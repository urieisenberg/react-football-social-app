const User = require("../models/userModel");
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
const validateComment = require("../validations/commentSchema");

//create a new comment
const newComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).send("Post not found");

    const { error } = validateComment(req.body.commentText);
    if (error) return res.status(400).send(error.details[0].message);

    const comment = await Comment.create({
      user: req.user.id,
      username: req.user.username,
      image: req.user.team.logo,
      content: req.body.content,
      post: req.params.postId,
    });
    await Post.findByIdAndUpdate(
      req.params.postId,
      {
        $push: {
          comments: comment,
        },
      },
      { new: true, timestamps: false }
    );
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).send(err);
  }
};

//delete comment
const deleteComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).send("Post not found");

    const comment = await Comment.findById(req.params.commentId);
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).send("You are not authorized to view this page");
    }

    post.comments = post.comments.filter(
      (comment) => comment._id.toString() !== req.params.commentId
    );
    await Post.findByIdAndUpdate(req.params.postId, post, {
      new: true,
      timestamps: false,
    });

    res.status(200).json(req.params.commentId);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  newComment,
  deleteComment,
};
