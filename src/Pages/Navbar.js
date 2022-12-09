import React, { Component } from "react";
import "./Navbar.css";
// import {Link} from 'react-router-dom';
// import logo from '../logo.svg';
// import styled from 'styled-components';
// import {ButtonContainer} from './Button';
import { Link } from "react-router-dom";

export default function Navbar({ count, handleShow, product, addToCart }) {
  function signout() {
    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");
    localStorage.removeItem("user-info");
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container">
        {/* <button className="btn btn-outline-light" type="submit">Button 2</button> */}
        <Link to="/CustomerHome">
          <span className="navbar-brand position-absolute start-0 ms-3 top-0 mt-2 h1 logo">
            Shopify
          </span>
        </Link>
        <div class="row">
          <div class="col-1">
            <input
              type="text"
              id="search"
              className="form-control "
              placeholder=""
            />
          </div>
          <div class="col-1">
            <button id="searchbtn" className="btn btn-primary d-none" type="button">
              Search
            </button>
          </div>
        </div>
        <div className="dropdown position-absolute end-0" id="dd">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Account
          </button>

          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <Link to="/profile">
                {" "}
                <a className="dropdown-item">Profile</a>{" "}
              </Link>{" "}
            </li>
            <li>
              <Link to="/wishlist">
                <a className="dropdown-item" href="#">
                  Wishlist
                </a>{" "}
              </Link>{" "}
            </li>
            <li>
              <Link to="/wallet">
                <a className="dropdown-item" href="#">
                  My Wallet
                </a>
              </Link>
            </li>
            <li>
              <Link to="/order_history">
                <a className="dropdown-item">Order History</a>
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link to="/">
                <button
                  className="dropdown-item btn btn-danger"
                  onClick={signout}
                >
                  Sign Out
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/cart">
          <button className="btn btn-outline-warning position-absolute top-0 mt-2 end-0 me-5 ">
            {/* &#xf07a; */}
            Cart
            <sup>{count}</sup>
          </button>
        </Link>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg> */}

        {/* <button type="button" className="btn btn-dark">Account</button> */}
      </div>
    </nav>
  );
}
