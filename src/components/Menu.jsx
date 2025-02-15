import { useState } from "react";
import MenuSection from "./MenuSection";
import menuData from "../data";

const categories = ["Pastas", "Salads", "Pizzas", "Desserts", "Drinks"];

function Menu() {
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
      <div onClick={handlePrev}>
        <h1> &lt;</h1>
      </div>
      <div className="menu-section">
        <MenuSection filteredItems={filteredItems} />
      </div>

      <div onClick={handleNext}>
        <h1> &gt; </h1>
      </div>
    </div>
  );
}
export default Menu;
