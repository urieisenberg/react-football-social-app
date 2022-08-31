const express = require("express");
const router = express.Router();
const {
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
} = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

//getUser
router.get("/:username", auth, getUser);
//delete
router.delete("/:id/ciao", auth, deleteUser);
//followUser
router.put("/:id/follow", auth, followUser);
//unfollowUser
router.put("/:id/unfollow", auth, unfollowUser);
//getFollows
router.get("/:id/follows", auth, getFollows);
//getFollowed
router.get("/:id/followed", auth, getFollowed);
//saveFixture
router.put("/:id/fixture", auth, saveFixture);
//getSavedFixtures
router.get("/:id/fixtures", auth, getSavedFixtures);
//deleteFixture
router.delete("/:id/fixture/:fixture", auth, deleteFixture);
//deleteAllFixtures
router.delete("/:id/fixtures", auth, deleteAllFixtures);

module.exports = router;
