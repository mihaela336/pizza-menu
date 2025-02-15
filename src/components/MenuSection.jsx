import React from "react";
import FoodItem from "./FoodItem.jsx";

function MenuSection({ filteredItems }) {
  const items = filteredItems.items;
  const numItems = items.length;

  return (
    <main className="items">
      <h2> {filteredItems.category}</h2>

      {numItems > 0 ? (
        <>
          <p>{filteredItems.description}</p>
          <ul className="pizzas">
            {items.map((item) => {
              return <FoodItem itemObj={item} key={item.id} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu, please come back later</p>
      )}
    </main>
  );
}

export default MenuSection;
