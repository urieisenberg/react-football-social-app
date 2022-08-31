const express = require("express");
const router = express.Router();
const {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketController");
const auth = require("../middleware/authMiddleware");
const noteRouter = require("./noteRoutes");

router.use("/:ticketId/notes", noteRouter);

router.route("/").post(auth, createTicket).get(auth, getTickets);

router
  .route("/:id")
  .get(auth, getTicket)
  .delete(auth, deleteTicket)
  .put(auth, updateTicket);

module.exports = router;
