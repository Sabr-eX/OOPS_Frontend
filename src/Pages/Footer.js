import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="py-5 foot">
        <div className="row">
          <div className="col-2">
            <h5 className="text-light">Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/CustomerHome" className="nav-link p-0 text-light">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/Profile" className="nav-link p-0 text-light">
                  Profile
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/order_history" className="nav-link p-0 text-light">
                  My Wallet
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/order_history" className="nav-link p-0 text-light">
                  Order History
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/Wishlist" className="nav-link p-0 text-light">
                  Wishlist
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/Cart" className="nav-link p-0 text-light">
                  Cart
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5 className="text-light">About</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-light">Ansh Goyal</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-light">Gaurav Somai</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-light">Harsh Rachalwar</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-light">Kumarasamy Chelliah</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-light">Kush Agrawal</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-light">Manan Gupta</a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5 className="text-light">Contact Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-light">+91 9427458974</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-light">+91 9427458974</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-light">+91 9427458974</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-light">+91 9427458974</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-light">+91 9427458974</a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link p-0 text-light">+91 9427458974</a>
              </li>
            </ul>
          </div>

          <div className="col-4 offset-1">
            <form>
              <h5 className="text-light">Subscribe to our newsletter</h5>
              <p className="text-light">
                Receive notifications of upcoming deals
              </p>
              <div className="d-flex w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* <div className="d-flex justify-content-between py-4 my-4 border-top">
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-light"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
      </ul>
    </div> */}

        {/* <div className="d-flex justify-content-between py-4 my-4 border-top">
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-light"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-light"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-light"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
      </ul>
      <i className="fab fa-facebook-f"></i>
    </div> */}
      </footer>
    );
  }
}
