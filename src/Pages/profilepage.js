import React, { Component, useState } from "react";
import "./profilepage.css";
import axios from "axios";

export default function Profilepagecomponent() {
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  
  const [editOn, setEditOn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState();

  const handleClick = (event) => {
    event.preventDefault();
    setEditOn(!editOn);
  };

  const submit = async (event) => {
    event.preventDefault();
    setEditOn(!editOn);

    const response = await axios.post(".railway.app/users/" + userInfo.id, {
        name, password, phone
    })
  };

  return (
    <div>
      <br />
      <p className="h1 userptext cent">User Profile</p>
      <hr className="mb-5 mt-3" width="65%" />
      <br />

      <form>
        <div className="form-group cent">
          <div className="row">
            <div className="col-2">
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
            <div className="col-4">
              <input
                className="form-control textbox"
                id="password"
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
            <div className="col-1">
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
          <button className="btn btn-danger mt-5" onClick={handleClick}>
            Edit
          </button>
        ) : (
          <button className="btn btn-success mt-5" onClick={submit}>
            Save
          </button>
        )}
      </form>
    </div>
  );
}
