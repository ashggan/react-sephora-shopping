import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  // <Provider store={store}> </Provider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
