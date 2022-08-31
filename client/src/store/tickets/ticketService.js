import axios from "axios";

const API_URL = "/tickets/";

const createTicket = async (ticketData) => {
  const response = await axios.post(API_URL, ticketData);
  return response.data;
};

const getTickets = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getTicket = async (ticketId) => {
  const response = await axios.get(API_URL + ticketId);
  return response.data;
};

const updateTicket = async (ticketId, ticketData) => {
  const response = await axios.put(API_URL + ticketId, ticketData);
  return response.data;
};

const closeTicket = async (ticketId) => {
  const response = await axios.delete(API_URL + ticketId, { status: "closed" });
  return response.data;
};

const ticketService = {
  createTicket,
  getTickets,
  getTicket,
  updateTicket,
  closeTicket,
};

export default ticketService;
