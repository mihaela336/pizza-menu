import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";

//render to dom
//create object
const root = ReactDOM.createRoot(document.getElementById("root"));

//render component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
