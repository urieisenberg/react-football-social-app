const Post = require("../models/postModel");
const User = require("../models/userModel");
const validatePost = require("../validations/postSchema");

//create a new post
const createPost = async (req, res) => {
  try {
    const { error } = validatePost(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send("User not found");

    const newPost = await Post.create({
      type: req.body.type,
      content: req.body.content,
      user: req.user.id,
      team: user.team.name,
      username: user.username,
      image: user.team.logo,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get all posts
const getPosts = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send("User not found");
    const posts = await Post.find({
      type: "feed",
    });
    if (!posts) return res.status(400).send("No posts found");
    else return res.status(200).json(posts);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getTeamPosts = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send("User not found");

    const { team } = user;

    if (team.id.toString() === req.params.team) {
      const posts = await Post.find({
        type: user.team.id,
      });

      if (!posts) return res.status(400).send("No posts found");
      else return res.status(200).json(posts);
    } else
      return res
        .status(401)
        .send("You are not authorized to view this team's posts");
  } catch (err) {
    res.status(500).send(err);
  }
};

//get post by id
const getPostById = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send("User not found");

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("Post not found");

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update post
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("Post not found");

    if (post.user.toString() !== req.user.id) {
      res.status(401).send("You are not authorized to edit this post");
    }
    const { error } = validatePost(req.body.comment);

    if (error) return res.status(400).send(error.details[0].message);

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("Post not found");

    if (post.user.toString() !== req.user.id) {
      return res.status(401).send("You are not authorized to delete this post");
    }

    await Post.findByIdAndDelete(req.params.id);
    res.status(200).send("Post deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

//search posts
const searchPosts = async (req, res) => {
  try {
    const { searchTerm } = req.params.post;
    const content = new RegExp(searchTerm, "i");
    const searchResults = await Post.find({
      type: "feed",
      content: { $regex: req.params.post },
    })
      .sort({ createdAt: -1 })
      .exec();
    if (!searchResults) return res.status(400).send("No posts found");
    else return res.status(200).json(searchResults);
  } catch (err) {
    res.status(500).json(err);
  }
};

//search user posts
const searchUserPosts = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send("User not found");
    const { searchTerm } = req.params.post;
    const content = new RegExp(searchTerm, "i");
    const searchResults = await Post.find({
      type: "feed",
      content: { $regex: req.params.post },
      username: req.params.username,
    }).sort({ createdAt: -1 });
    if (!searchResults) return res.status(400).send("No posts found");
    else return res.status(200).json(searchResults);
  } catch (err) {
    res.status(500).json(err);
  }
};

//like post
const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("Post not found");

    const likes = post.likes.findIndex((id) => id === req.user.id);
    if (likes === -1) {
      post.likes.push(req.user.id);
    } else {
      post.likes = post.likes.filter((id) => id !== req.user.id);
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, post, {
      new: true,
      timestamps: false,
    });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get all feed user posts
const getUserPosts = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).send("User not found");
    const userPosts = await Post.find({
      type: "feed",
      user: user.id,
    }).sort({
      createdAt: -1,
    });
    if (!userPosts) return res.status(400).send("No posts found");
    res.status(200).json(userPosts);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get all posts liked by user
const getLikedPosts = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).send("User not found");
    const allPosts = await Post.find({
      type: "feed",
    });
    const likedPosts = allPosts.filter((post) => post.likes.includes(user._id));
    if (!likedPosts) return res.status(400).send("No posts found");
    res.status(200).json(likedPosts);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createPost,
  getPosts,
  getTeamPosts,
  updatePost,
  deletePost,
  likePost,
  getPostById,
  searchPosts,
  getUserPosts,
  getLikedPosts,
  searchUserPosts,
};
