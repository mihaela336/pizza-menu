import { useState } from "react";
import Header from "./Header.jsx";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  const [order, setOrder] = useState([]);
  const [clear, setClear] = useState(false);

  function handleAddItem(name, quantity) {
    const newItem = { name, quantity };
    setOrder((order = []) => {
      const existingItem = order.find((item) => item.name === name);

      if (existingItem) {
        return order.map((item) =>
          item.name === name ? { ...item, quantity: quantity } : item
        );
      } else {
        return [...order, newItem];
      }
    });

    console.log(order);
  }

  function handleClearOrder() {
    setClear(true);
    setOrder([]);
    setClear(false);
  }
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <Header />

      <Menu onAddItem={handleAddItem} />

      <Footer onClearOrder={handleClearOrder} />
    </>
  );
}

export default App;
