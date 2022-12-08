import React from "react";
import { Link } from "react-router-dom";
import "./Confirmation.css";
import Navbar from "./Navbar";

localStorage.removeItem("cart");
function deleteCart() {
  localStorage.removeItem("cart");
}

export default function Confirmation() {
  return (
    <div className="main">
      <Navbar />
      <label>
        <small>Shopify</small>
      </label>
      <h1 className="heading">Thank you for shopping with Shopify!</h1>
      <h2 className="heading2">Your Order has been placed successfully!</h2>
      <div className="buttons">
        <Link to="/CustomerHome">
          <button className="btn btn-warning b1" onClick={deleteCart}>
            Continue Shopping
          </button>
        </Link>
        <Link to="/">
          <button className="btn btn-danger b2" onClick={deleteCart}>
            Sign Out
          </button>
        </Link>
        <Link to="/order_history">
          <button className="btn btn-success b3" onClick={deleteCart}>
            Order Status
          </button>
        </Link>
      </div>
    </div>
  );
}
