import React from "react";
import pizzaData from "../data.js";

//create component

function Pizza() {
  return (
    <div className="pizza">
      <img src="pizzas/focaccia.jpg" alt="Focaccia"></img>
      <h3>Focaccia</h3>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

export default Pizza;
