import React, { Component } from "react";
import CartList from "./CartList";
import WishlistList from "./WishlistList";
// import productsData from "./productsData";
import { Link } from "react-router-dom";

export default function Product({ product, addToCart, addToWishlist }) {
  return (
    <div className="flex">
      {product?.map((product) => {
        return (
          <div className="container">
            <div className="card mb-3 ">
              <div className="row g-0">
                <div className="col-4">
                  <img
                    src={product?.image}
                    width="430"
                    height="200"
                    alt="..."
                  />
                </div>
                <div className="col-6">
                  <div className="card-body">
                    <div key={product.id}>
                      <h4 className="card-title">
                        <Link to={`/${product.id}`}>{product.name}</Link>
                        <br />
                      </h4>
                    </div>
                    <p className="card-text mt-3">
                      Rs. {product.price}
                      <br />
                    </p>
                    <p className="card-text mt-3">
                      {product.description}
                      {/* <small class="text-muted">Rating: 4.7/5</small> */}
                    </p>
                  </div>
                </div>

                <div className="col-2">
                  <button
                    className="btn btn-outline-success mt-5"
                    onClick={() => addToWishlist(product)}
                  >
                    Add to Wishlist
                  </button>

                  <button
                    className="btn btn-outline-danger position-absolute end-0 bottom-0 translate-middle-x mb-5"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
