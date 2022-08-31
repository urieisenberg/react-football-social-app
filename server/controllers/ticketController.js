const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");
const validateTickets = require("../validations/ticketSchema");

//create a new ticket
const createTicket = async (req, res) => {
  try {
    const { error } = validateTickets(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { subject, description } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) res.status(401).send("User not found");

    const ticket = await Ticket.create({
      subject,
      description,
      user: req.user.id,
      status: "New",
    });
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).send(err);
  }
};

//get all tickets
const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user.id });
    if (!tickets) res.status(404).send("No tickets found");

    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json(err).send("Something went wrong");
  }
};

//get a ticket by id
const getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) res.status(404).send("Ticket not found");
    if (ticket.user.toString() !== req.user.id) {
      res.status(401).send("You are not authorized to view this ticket");
    }

    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json(err).send(err);
  }
};

//delete a ticket
const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) res.status(404).send("Ticket not found");
    if (ticket.user.toString() !== req.user.id) {
      res.status(401).send("You are not authorized to delete this ticket");
    }
    await ticket.remove();
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).send(err);
  }
};

//update a ticket
const updateTicket = async (req, res) => {
  try {
    const { error } = validateTickets(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) res.status(404).send("Ticket not found");

    if (ticket.user.toString() !== req.user.id) {
      res.status(401).send("You are not authorized to update this ticket");
    }

    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedTicket);
  } catch (err) {
    res.status(500).json(err).send(err);
  }
};

module.exports = {
  createTicket,
  getTickets,
  getTicket,
  deleteTicket,
  updateTicket,
};



