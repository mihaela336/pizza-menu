import React from "react";
import Pizza from "./Pizza.jsx";

function Menu() {
  return (
    <main className="menu">
      <h2> Our Menu</h2>
      <p>Authentic italian pizza</p>
      <div className="pizzas">
        <Pizza />
        <Pizza />
        <Pizza />
      </div>
    </main>
  );
}

export default Menu;
