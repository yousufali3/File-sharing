import React from "react";
import ReactDOM from "react-dom";
// Import ThemeProvider from your theme library
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

// Use ReactDOM.createRoot or ReactDOM.render, not both
// ReactDOM.createRoot(document.getElementById("root")).render(
ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
