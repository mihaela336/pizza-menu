import React from "react";
import ReactDOM from "react-dom/client";

//create component
function App() {
  return <h1> Hell-o</h1>;
}

//render to dom
//create object
const root = ReactDOM.createRoot(document.getElementById("root"));

//render component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
