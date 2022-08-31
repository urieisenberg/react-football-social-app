const User = require("../models/userModel");
const validateRegistration = require("../validations/registerSchema");
const validateLogin = require("../validations/loginSchema");
const { comparePassword, generatePassword } = require("../config/bcrypt");
const { generateToken, verifyToken } = require("../config/token");

//get user by username
const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).select([
      "-password",
      "-__v",
    ]);
    if (!user) return res.status(401).send("User not found");
    res.status(200).json(user);
  } catch (err) {
    return res.status(401).send(err);
  }
};

//delete user by id
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    await user.remove();
    res.status(200).send("User deleted");
  } catch (err) {
    return res.status(500).send("Something went wrong");
  }
};

//follow user
const followUser = async (req, res) => {
  try {
    //make sure user won't follow himslef
    if (req.user.id !== req.params.id) {
      const userToFollow = await User.findById(req.params.id);
      const currentUser = await User.findById(req.user.id);
      if (!userToFollow.followed.includes(req.user.id)) {
        userToFollow.followed.push(req.user.id);
        currentUser.follows.push(req.params.id);
        await userToFollow.save();
        await currentUser.save();
        res.status(200).json(req.params.id);
      } else {
        res.status(400).send("You are already following this user");
      }
    } else {
      res.status(401).send("You can't follow yourself");
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

//unfollow user
const unfollowUser = async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      const userToUnfollow = await User.findById(req.params.id);
      const currentUser = await User.findById(req.user.id);
      if (userToUnfollow.followed.includes(req.user.id)) {
        userToUnfollow.followed.splice(
          userToUnfollow.followed.indexOf(req.user.id),
          1
        );
        currentUser.follows.splice(
          currentUser.follows.indexOf(req.params.id),
          1
        );
        await userToUnfollow.save();
        await currentUser.save();
        res.status(200).json(req.params.id);
      } else {
        res.status(400).send("You are not following this user");
      }
    } else {
      res.status(401).send("You can't unfollow yourself");
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

//get all followos
const getFollows = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const userFollowings = await Promise.all(
      user.follows.map((followId) => {
        return User.findById(followId);
      })
    );
    let followingArr = [];
    userFollowings.map((follow) => {
      const { _id, username, follows, followed, team } = follow;
      followingArr.push({
        _id,
        username,
        image: team.logo,
        team: team.name,
        follows,
        followed,
      });
    });
    res.status(200).json(followingArr);
  } catch (err) {
    return res.status(500).send(err);
  }
};

//get all followed
const getFollowed = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const userFollowers = await Promise.all(
      user.followed.map((followId) => {
        return User.findById(followId);
      })
    );
    let followersArr = [];
    userFollowers.map((follower) => {
      const { _id, username, follows, followed, team } = follower;
      followersArr.push({
        _id,
        username,
        image: team.logo,
        team: team.name,
        follows,
        followed,
      });
    });
    res.status(200).json(followersArr);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const saveFixture = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    let saveFixture = req.body.fixture;
    const fixtures = user.fixtures.findIndex(
      (fixture) => fixture.id === saveFixture.id
    );
    if (fixtures === -1) {
      user.fixtures.push(saveFixture);
    } else {
      user.fixtures = user.fixtures.filter(
        (fixture) => fixture.id !== saveFixture.id
      );
    }
    await user.save();
    res.status(200).json(saveFixture);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getSavedFixtures = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const savedFixtures = user.fixtures;
    res.status(200).json(savedFixtures);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteFixture = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const deleteFixture = user.fixtures.findIndex(
      (fixture) => fixture.id === req.params.fixture
    );
    if (deleteFixture !== -1) {
      user.fixtures = user.fixtures.filter(
        (fixture) => fixture.id !== req.params.fixture
      );
      await user.save();
      res.status(200).json(req.params.id);
    } else {
      res.status(400).send("Fixture not found");
    }
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteAllFixtures = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.fixtures = [];
    await user.save();
    res.status(200).json(req.user.id);
  } catch (err) {
    return res.status(500).send(err);
  }
};



module.exports = {
  deleteUser,
  getUser,
  followUser,
  unfollowUser,
  getFollows,
  getFollowed,
  saveFixture,
  getSavedFixtures,
  deleteFixture,
  deleteAllFixtures,
};
