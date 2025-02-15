import { useState } from "react";
import MenuSection from "./MenuSection";
import menuData from "../data";

const categories = ["Pasta", "Salads", "Pizza", "Dessert", "Drinks"];

function Menu({ onAddItem }) {
  const [categoryIndex, setCategoryIndex] = useState(0);

  function handlePrev() {
    setCategoryIndex((categoryIndex) =>
      categoryIndex === 0
        ? (categoryIndex = categories.length - 1)
        : categoryIndex - 1
    );
  }
  function handleNext() {
    setCategoryIndex((categoryIndex) =>
      categoryIndex === categories.length - 1
        ? (categoryIndex = 0)
        : categoryIndex + 1
    );
  }

  const filteredItems = menuData.find(
    (item) => item.category === categories[categoryIndex]
  );

  return (
    <div className="container">
      <div className="slider" onClick={handlePrev}>
        <h1> &lt;</h1>
      </div>
      <div className="menu-section">
        <MenuSection filteredItems={filteredItems} onAddItem={onAddItem} />
      </div>

      <div className="slider" onClick={handleNext}>
        <h1> &gt; </h1>
      </div>
    </div>
  );
}
export default Menu;
