import React from "react";
function Footer() {
  return (
    <footer>
      <p>
        {new Date().toLocaleTimeString()} We're open until 22:00. Order or visit
        our shop online!
      </p>
      <button>Order</button>
    </footer>
  );
}

export default Footer;
