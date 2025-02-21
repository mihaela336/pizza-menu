import React from "react";
import FoodItem from "./FoodItem.jsx";

function MenuSection({ filteredItems, onAddItem }) {
  const items = filteredItems.items;
  const numItems = items.length;

  return (
    <main className="section-headder">
      <h2> {filteredItems.category}</h2>

      {numItems > 0 ? (
        <>
          <p>{filteredItems.description}</p>
          <ul className="items">
            {items.map((item) => {
              return (
                <FoodItem itemObj={item} key={item.id} onAddItem={onAddItem} />
              );
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
