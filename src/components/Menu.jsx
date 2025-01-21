import React from "react";
import Pizza from "./Pizza.jsx";
import pizzaData from "../data.js";

function Menu() {
  return (
    <main className="menu">
      <h2> Our Menu</h2>

      <p>Authentic italian pizza</p>
      <div className="pizzas">
        <div>
          {pizzaData.map((pizza) => {
            return (
              <Pizza
                name={pizza.name}
                photoName={pizza.photoName}
                ingredients={pizza.ingredients}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Menu;
