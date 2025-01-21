import React from "react";

function Header() {
  const inlineStyle = {
    color: "red",
    fontSize: "48px",
    textTransform: "uppercase",
  };
  return (
    <header className="header">
      <h1>React Pizza Menu</h1>;
    </header>
  );
}

export default Header;
