import React from "react";

//create component

function FoodItem({ itemObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    // <li className={pizzaObj.soldOut ? "pizza sold-out" : "pizza"}> working
    <li className={`pizza ${itemObj.soldOut ? "sold-out" : ""}`}>
      {/* using template literal ->makes  code less repetitive */}
      <img src={itemObj.photoName} alt={itemObj.name}></img>
      <div>
        <h3>{itemObj.name}</h3>
        <p>{itemObj.ingredients}</p>
        <span>{itemObj.soldOut ? "SOLD OUT" : itemObj.price}</span>
      </div>
    </li>
  );
}

export default FoodItem;
