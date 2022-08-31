const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");
const Note = require("../models/noteModel");
const validateNote = require("../validations/noteSchema");

//get notes for a ticket
const getNotes = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send("User not found");

    const ticket = await Ticket.findById(req.params.ticketId);

    if (ticket.user.toString() !== req.user.id) {
      res.status(401).send("You are not authorized to view this page");
    }

    const notes = await Note.find({ ticket: req.params.ticketId });

    res.json(notes);
  } catch (err) {
    res.status(500).send(err);
  }
};

//create a new note
const createNote = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send("User not found");

    const ticket = await Ticket.findById(req.params.ticketId);

    if (ticket.user.toString() !== req.user.id) {
      res.status(401).send("You are not authorized to view this page");
    }

    const { error } = validateNote(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const note = await Note.create({
      text: req.body.text,
      ticket: req.params.ticketId,
      user: req.user.id,
      isStaff: false,
    });

    res.status(200).json(note);
  } catch (err) {
    res.status(500).send(err);
  }
};

//delete note
const deleteNote = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.ticketId);

    if (ticket.user.toString() !== req.user.id) {
      res.status(401).send("You are not authorized to view this page");
    }

    const notes = await Note.find({ ticket: req.params.ticketId });
    if (!notes) return res.status(400).send("No notes found");

    const note = await Note.findByIdAndDelete(req.params.noteId);
    if (!note) return res.status(400).send("Note not found");

    res.status(200).send("Note deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};

//delete all notes
const deleteAllNotes = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.ticketId);

    if (ticket.user.toString() !== req.user.id) {
      res.status(401).send("You are not authorized to view this page");
    }

    const notes = await Note.find({ ticket: req.params.ticketId });
    if (!notes) return res.status(400).send("No notes found");

    notes.forEach(async (note) => {
      await Note.findByIdAndDelete(note._id);
    });

    res.status(200).send("All notes deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getNotes, createNote, deleteNote, deleteAllNotes };
