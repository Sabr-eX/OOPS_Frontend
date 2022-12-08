import React, { Component, useState } from "react";
import "./profilepage.css";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Profilepagecomponent() {
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  // localStorage.setItem("user-info", JSON.stringify(result))

  const [editOn, setEditOn] = useState(true);
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(userInfo.phone);
  let item = { email, password };

  const handleClick = (event) => {
    event.preventDefault();
    setEditOn(!editOn);
  };
  const navigate = useNavigate();
  const submit = async (event) => {
    event.preventDefault();
    setEditOn(!editOn);

    let response = await axios.post(
      "https://gada-electronics.up.railway.app/users/edit/" + userInfo.id,
      {
        name,
        password,
        phone,
      }
    );

    // let result = await fetch(
    //   "https://gada-electronics.up.railway.app/users/signin",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify(item),
    //   }
    // );
    response = await response.data;
    localStorage.setItem("user-info", JSON.stringify(response));
    setPassword("");
  };

  const deleteAccount = async (event) => {
    event.preventDefault();
    setEditOn(true);

    let response = await axios.post(
      "https://gada-electronics.up.railway.app/users/delete/" + userInfo.id
    );
    const status = await response.status;

    if (status === 200) {
      console.log("status ok bro");
      localStorage.removeItem("user-info");
      localStorage.removeItem("wishlist");
      localStorage.removeItem("cart");
      navigate("/user");
    }
  };

  return (
    <div className="pic">
      <Navbar />
      <br />
      <p className="h1 userptext">User Profile</p>
      <hr className="mb-5 mt-3 line" width="80%" />
      <br />

      <form>
        <div className="form-group cent">
          <div className="row">
            <div className="col-1">
              <label>Name: </label>
            </div>

            <div className="col-4">
              <input
                className="form-control textbox"
                id="name"
                name="name"
                value={name}
                placeholder="Name"
                disabled={editOn}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-1">
              <label>Email:</label>
            </div>
            <div className="col-4">
              <input
                className="form-control textbox"
                id="email"
                name="email"
                value={email}
                placeholder="Email id"
                disabled={true}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-1">
              <label>Password:</label>
            </div>
            <div className="col-4">
              <input
                className="form-control textbox"
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                disabled={editOn}
              />
            </div>
          </div>

          <div className="row">
            {/* <div className="col-1"> */}
            {/* <div className="dropdown" id="gender" disabled={editOn}>
                <button
                  className="btn btn-outline-dark dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  disabled={editOn}
                >
                  Gender
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Male
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Female
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Other
                    </a>
                  </li>
                </ul>
              </div> */}
            {/* </div> */}

            <div className="col-1">
              <label>Phone no:</label>
            </div>

            <div className="col-4">
              <input
                className="form-control textbox"
                id="phone"
                placeholder="Phone No"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
                disabled={editOn}
              />
            </div>
          </div>

          {/* <div className="row">
            <div className="col-4">
              <input
                className="form-control textbox"
                id="streetname"
                placeholder="Street Name"
                disabled={editOn}
              />
            </div>
          </div> */}

          {/* <div className="row">
            <div className="col-4">
              <input
                className="form-control textbox"
                id="city"
                placeholder="City"
                disabled={editOn}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <input
                className="form-control textbox"
                id="state"
                placeholder="State"
                disabled={editOn}
              />
            </div>
          </div> */}

          {/* <div className="row">
            <div className="col-4">
              <input
                className="form-control textbox"
                id="country"
                placeholder="Country"
                disabled={editOn}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <input
                className="form-control textbox"
                id="postalcode"
                placeholder="Postal Code"
                disabled={editOn}
              />
            </div>
          </div> */}
        </div>

        {editOn ? (
          <button className="btn btn-danger mt-5 me-5" onClick={handleClick}>
            Edit Details
          </button>
        ) : (
          <button className="btn btn-success mt-5 me-5" onClick={submit}>
            Save Details
          </button>
        )}

        <button className="btn btn-danger mt-5 ms-5 " onClick={deleteAccount}>
          Delete Account
        </button>
      </form>
    </div>
  );
}
