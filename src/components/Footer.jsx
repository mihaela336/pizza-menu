import React from "react";
import Order from "./Order";
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
        <Order closeHour={closeHour} />
      ) : (
        <p>We are closed, opening at {openHour}:00!</p>
      )}
    </footer>
  );
}

export default Footer;
