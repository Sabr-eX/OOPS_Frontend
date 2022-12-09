import React, { useState, useEffect } from "react";
import "../App.css";

function WishlistList({ addToCart }) {
  const wishlistfromlocal = JSON.parse(
    localStorage.getItem("wishlist") || "[]"
  );

function removeFromWish(){
  
}  

  const [WISHLIST, setWISHLIST] = useState(wishlistfromlocal);
  const [wishlistlength, setwishlistlength] = useState(WISHLIST.length);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(WISHLIST));
  }, [WISHLIST]);

  useEffect(() => {
    setwishlistlength(WISHLIST.length);
  }, [WISHLIST]);

  function deletewishlist() {
    setWISHLIST([]);
  }

  return (
    <div className="k">
      <h1 className="k2">Your Wishlist</h1>

      {wishlistlength === 0 ? (
        <h2 className="k3">Wishlist Empty</h2>
      ) : (
        WISHLIST?.map((wishlistItem, wishlistindex) => {
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
                <div className="col-2">
                  <button
                    className="btn btn-outline-danger cart_btn"
                    onClick={() => addToCart(wishlistItem)}
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="col-1">
                  {/* <button className="btn btn-outline-danger cart_btn" onClick={removeFromWish}>
                    Remove from Wishlist
                  </button> */}
                </div>
              </div>
            </div>
          );
        })
      )}
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
          <a href="/customerHome">
            <button className="btn btn-warning">Continue Shopping</button>
          </a>
        </div>
        <div className="col-2" />
        <div className="col-2">
          {wishlistlength !== 0 ? (
            <button className="btn btn-danger" onClick={deletewishlist}>
              Clear Wishlist
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default WishlistList;
