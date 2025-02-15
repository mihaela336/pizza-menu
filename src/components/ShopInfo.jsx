import React from "react";

function ShopInfo({ closeHour, openHour, onClearOrder }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour} until {closeHour}:00! Order or visit our shop
        online!
      </p>
      <div>
        <button className="btn">Order</button>
        <button className="btn" onClick={onClearOrder}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default ShopInfo;
