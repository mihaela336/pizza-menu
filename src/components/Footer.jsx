import React from "react";
import ShopInfo from "./ShopInfo";
function Footer({ onClearOrder }) {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <ShopInfo
          closeHour={closeHour}
          openHour={openHour}
          onClearOrder={onClearOrder}
        />
      ) : (
        <p>We are closed, opening at {openHour}:00!</p>
      )}
    </footer>
  );
}

export default Footer;
