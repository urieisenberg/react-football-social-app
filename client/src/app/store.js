import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/auth/authSlice";
import userReducer from "../store/users/userSlice";
import postReducer from "../store/posts/postSlice";
import commentReducer from "../store/comments/commentSlice";
import ticketReducer from "../store/tickets/ticketSlice";
import noteReducer from "../store/notes/noteSlice";
import { apiFootballSlice } from "../store/api/apiFootballSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    posts: postReducer,
    comments: commentReducer,
    tickets: ticketReducer,
    notes: noteReducer,
    [apiFootballSlice.reducerPath]: apiFootballSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiFootballSlice.middleware),
});
