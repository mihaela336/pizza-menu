import React from "react";

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open fro {openHour} until {closeHour}:00! Order or visit our shop
        online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
