import React from "react";
import Header from "./Header.jsx";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <Header />

      <Menu />

      <Footer />
    </>
  );
}

export default App;
