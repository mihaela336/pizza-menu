import MenuSection from "./MenuSection";

function Menu() {
  return (
    <div className="container">
      <div className="menu-button">
        <h1> &lt;</h1>
      </div>
      <div className="menu-section">
        <MenuSection />
      </div>

      <div className="menu-button">
        <h1> &gt; </h1>
      </div>
    </div>
  );
}
export default Menu;
