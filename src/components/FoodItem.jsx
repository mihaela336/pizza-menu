import { useState } from "react";

//create component

function FoodItem({ itemObj, onAddItem }) {
  const [quantity, setQuantity] = useState(0);
  function handleClick() {
    setQuantity((quantity) => quantity + 1);
    const newQuantity = quantity + 1;
    console.log(newQuantity);

    onAddItem(itemObj.name, newQuantity);
  }
  return (
    <li
      className={`item ${itemObj.soldOut ? "sold-out" : ""}`}
      onClick={handleClick}
    >
      <img src={itemObj.photoName} alt={itemObj.name}></img>
      <div>
        <h3>
          {itemObj.name}
          <span>{quantity === 0 ? "" : quantity}</span>
        </h3>
        <p>{itemObj.ingredients}</p>
        <span>{itemObj.soldOut ? "SOLD OUT" : `${itemObj.price} $`}</span>
      </div>
    </li>
  );
}

export default FoodItem;
