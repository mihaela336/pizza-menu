import React from "react";

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00! Order or visit our shop online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
