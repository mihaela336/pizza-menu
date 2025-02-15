import React from "react";

function ShopInfo({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour} until {closeHour}:00! Order or visit our shop
        online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default ShopInfo;
