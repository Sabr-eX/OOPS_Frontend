import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./detail.css";
import Navbar from "./Navbar";

function ProductDetail() {
  let { state } = useLocation();
  const product = state["product"];

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
    <div className="detail">
      <Navbar />
      <div className="details">
        <div className="big-img">
          <img src={product.image} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h1>{product.name}</h1>
            <span class="mb-4">
              <s class="me-2">Rs.{product.price}</s>
              {product.price}
            </span>
          </div>

          <p>{product.description}</p>
          <p>{product.content}</p>
          <span class="mb-4">Total Products left: {product.quantity}</span>

          <span class="mb-4">
            Expected Delivery Time: {product.quantity} Days
          </span>

          <br />
          <br />
          {/* <button type="button" class="btn btn-danger mt-3 mr-3">Add to cart</button> */}
          <button
            type="button"
            class="btn btn-danger mt-3"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
