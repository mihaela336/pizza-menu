import React from "react";
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //   if (hour >= openHour && hour <= closeHour) {
  //     alert("We're currently open!");
  //   } else {
  //     alert("Sorry we are closed :(");
  //   }

  //use syntax like this for early return when wanting to return
  // entire components conditionally
  //for just some pieces of jsx use ternary
  // if (!isOpen) return;
  // <p>We are closed, opening at {openHour}:00!</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open until {closeHour}:00! Order or visit our shop online!
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>We are closed, opening at {openHour}:00!</p>
      )}
    </footer>
  );
}

export default Footer;
