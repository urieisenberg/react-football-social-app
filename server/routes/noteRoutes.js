const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  getNotes,
  createNote,
  deleteNote,
  deleteAllNotes,
} = require("../controllers/noteController");
const auth = require("../middleware/authMiddleware");

router
  .route("/")
  .get(auth, getNotes)
  .post(auth, createNote)
  .delete(auth, deleteAllNotes);
router.route("/:noteId").delete(auth, deleteNote);

module.exports = router;
