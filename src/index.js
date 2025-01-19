import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data.js";

//create component
function App() {
  return (
    <div>
      <h1> Hell-o</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="Focaccia"></img>
      <h2>Focaccia</h2>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

//render to dom
//create object
const root = ReactDOM.createRoot(document.getElementById("root"));

//render component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
