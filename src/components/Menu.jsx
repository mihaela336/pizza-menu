import React from "react";
import Pizza from "./Pizza.jsx";

function Menu() {
  return (
    <main className="menu">
      <h2> Our Menu</h2>
      <p>Authentic italian pizza</p>
      <div className="pizzas">
        <Pizza
          className="pizza"
          //order in which we pass the props is irelevant
          name="Focaccia"
          photoName="pizzas/focaccia.jpg"
          ingredients="Bread with italian olive oil and rosemary"
          price={6}
          soldOut="false"
        />
      </div>
    </main>
  );
}

export default Menu;
