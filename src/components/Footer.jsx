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

  return (
    <footer classNAme="footer">
      <p>
        {isOpen
          ? `We're open until ${closeHour}:00! Order
        or visit our shop online!`
          : `We are closed, opening at ${openHour}:00!`}
      </p>
      <button className="btn">Order</button>
    </footer>
  );
}

export default Footer;
