import React from "react";

//create component

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    // <li className={pizzaObj.soldOut ? "pizza sold-out" : "pizza"}> working
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* using template literal ->makes  code less repetitive */}
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
