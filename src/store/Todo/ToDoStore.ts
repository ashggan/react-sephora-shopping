import ToDoReducer from "./ToDoReducer";
import { configureStore } from "@reduxjs/toolkit";

const ToDoStore = configureStore({ reducer: ToDoReducer });

export default ToDoStore;
