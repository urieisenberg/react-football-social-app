import { createAsyncThunk } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

export const createTicket = createAsyncThunk(
  "tickets/create",
  async (ticketData, thunkAPI) => {
    try {
      return await ticketService.createTicket(ticketData);
    } catch (err) {
      const message = err.response.data.message;
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTickets = createAsyncThunk(
  "tickets/getAll",
  async (_, thunkAPI) => {
    try {
      return await ticketService.getTickets();
    } catch (err) {
      const message = err.response.data.message;
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTicket = createAsyncThunk(
  "tickets/get",
  async (ticketId, thunkAPI) => {
    try {
      return await ticketService.getTicket(ticketId);
    } catch (err) {
      const message = err.response.data.message;
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateTicket = createAsyncThunk(
  "tickets/update",
  async ({ ticketId, ticketData }, thunkAPI) => {
    try {
      return await ticketService.updateTicket(ticketId, ticketData);
    } catch (err) {
      const message = err.response.data.message;
      thunkAPI.rejectWithValue(message);
    }
  }
);

export const closeTicket = createAsyncThunk(
  "tickets/close",
  async (ticketId, thunkAPI) => {
    try {
      return await ticketService.closeTicket(ticketId);
    } catch (err) {
      const message = err.response.data.message;
      thunkAPI.rejectWithValue(message);
    }
  }
);
