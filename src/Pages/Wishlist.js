import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import WishlistList from "./WishlistList";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer.js";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [product, setProduct] = useState();
  const cartfromlocal = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartfromlocal);

  const addToCart = async (data) => {
    // Check if the product is already in the cart
    const isProductInCart = cart.find((item) => item.id === data.id);

    if (isProductInCart) {
      // If the product is already in the cart, increase the quantity
      setCart(
        cart.map((item) =>
          item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the product is not in the cart, add it to the cart
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div className="App">
      <Navbar />
      <br />
      <div>
        <br />
        <br />
        <br />
        <br />
        <WishlistList
        product={product}
        addToCart={addToCart}>
        </WishlistList>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
