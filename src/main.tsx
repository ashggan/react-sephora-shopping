// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
