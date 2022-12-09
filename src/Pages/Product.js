import React, { Component } from "react";
import CartList from "./CartList";
import WishlistList from "./WishlistList";
// import productsData from "./productsData";
// import Toast from 'react-bootstrap/Toast'
import { Link } from "react-router-dom";

export default function Product({ product, addToCart, addToWishlist }) {
  // const toastTrigger = document.getElementById("liveToastBtn");
  // const toastLiveExample = document.getElementById("liveToast");
  // if (toastTrigger) {
  //   toastTrigger.addEventListener("click", () => {
  //     const toast = new bootstrap.Toast(toastLiveExample);

  //     toast.show();
  //   });
  // }
  // const [show, setShow] = useState(false);

  return (
    <div className="flex">
      {/* <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast> */}

      {product?.map((product) => {
        return (
          <div className="container">
            {/* <button type="button" class="btn btn-primary" id="liveToastBtn">
              Show live toast
            </button> */}

            {/* <div class="toast-container position-fixed bottom-0 end-0 p-3">
              <div
                
                class="toast"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div class="toast-header">
                  <img src="..." class="rounded me-2" alt="..." />
                  <strong class="me-auto">Shopify</strong>
                  <small>0 mins ago</small>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="toast-body">Product added to Cart</div>
              </div>
            </div> */}

            <div className="card mb-3" aria-hidden="true">
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
                        <Link
                          to={`/${product.id}`}
                          state={{ product: product }}
                        >
                          {product.name}
                        </Link>
                        <br />
                      </h4>
                    </div>
                    <p className="card-text mt-3">
                      <b>
                        ₹
                        {product.price -
                          (product.price * product.discount) / 100}
                      </b>
                      <small className="ms-2">
                        <s>₹{product.price} </s>
                      </small>
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
                    // id="liveToastBtn"
                    onClick={() => addToCart(product)}
                    // onClick={setShow(true)}
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
