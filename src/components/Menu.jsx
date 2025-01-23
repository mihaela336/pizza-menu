import React from "react";
import Pizza from "./Pizza.jsx";
import pizzaData from "../data.js";

function Menu() {
  // const pizzas = pizzaData;
  const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2> Our Menu</h2>

      <p>Authentic italian pizza</p>

      {numPizzas && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => {
            return <Pizza pizzaObj={pizza} key={pizza.name} />;
          })}
        </ul>
      )}
    </main>
  );
}

export default Menu;
