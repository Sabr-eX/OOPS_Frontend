import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import CartList from "./CartList";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <div>
        <br />
        <br />
        <br />
        <br />
        <CartList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
