import React from "react";
import pizzaData from "../data.js";

//create component

function Pizza({ pizzaObj }) {
  if (pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
