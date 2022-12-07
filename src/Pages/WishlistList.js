import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {addToCart} from './CustomerHome'

function WishlistList({ product, addToCart}) {
  const wishlistfromlocal = JSON.parse(
    localStorage.getItem("wishlist") || "[]"
  );
  

  const [WISHLIST, setWISHLIST] = useState(wishlistfromlocal);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(WISHLIST));
  }, [WISHLIST]);

  return (
    <div className="k">
      <h1 className="k2">Your Wishlist</h1>

      {WISHLIST?.map((wishlistItem, wishlistindex) => {
        return (
          <div className="wishlist">
            <div className="row mt-3">
              <div className="col-2" />
              <div className="col-2">
                <img src={wishlistItem.image} width={120} />
              </div>

              <div className="col-2">
                <span className="mt-5"> {wishlistItem.name} </span>
              </div>

              

                {/* <span> {wishlistItem.quantity} </span> */}

                {/* <button
                  class="btn btn-success ms-1"
                  onClick={() => {
                    const _WISHLIST = WISHLIST.map((item, index) => {
                      return wishlistindex === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                    });
                    setWISHLIST(_WISHLIST);
                    // localStorage.setItem("wishlist", JSON.stringify(wishlist));
                  }}
                >
                  +
                </button> */}
              
              
              <div className="col-1">
                <span> Rs. {wishlistItem.price} </span>
              </div>
              <div className="col-1">
              <button
                    className="btn btn-outline-danger cart_btn"
                    onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
            </div>
            </div>
          </div>
        );
      })}

      {/* <div className="row">
        <div className="col-6" />
        <div className="col-1">
          <p className="para"> Total:</p>{" "}
        </div>
        <div className="col-1">
          <p className="para">
            {" "}
            Rs.{" "}
            {WISHLIST.map((item) => item.price * item.quantity).reduce(
              (total, value) => total + value,
              0
            )}
          </p>
        </div>
      </div> */}

      <div className="row mt-4 mb-4">
        <div className="col-2" />
        <div className="col-2">
          <a href="/">
            <button className="btn btn-warning">Continue Shopping</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WishlistList;
