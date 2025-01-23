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
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open until {closeHour}:00! Order or visit our shop online!
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <div className="order">
          <p>We are closed, opening at {openHour}:00!</p>
        </div>
      )}
    </footer>
  );
}

export default Footer;
