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
          <div class="col-11">
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="e.g refrigirator"
            />
          </div>
          <div class="col-1">
            <button id="searchbtn" className="btn btn-primary" type="button">
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
            Cart <sup>{count}</sup>
          </button>
        </Link>

        {/* <button type="button" className="btn btn-dark">Account</button> */}
      </div>
    </nav>
  );
}
