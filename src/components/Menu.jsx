import React from "react";
import Pizza from "./Pizza.jsx";
import pizzaData from "../data.js";

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2> Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic italian pizza. 6 creative dishes to goose from. All from
            our stone oven, all organic , all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu, please come back later</p>
      )}
    </main>
  );
}

export default Menu;
