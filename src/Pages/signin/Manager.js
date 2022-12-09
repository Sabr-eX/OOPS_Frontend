import React, { useRef, useState, useEffect, useContext } from "react";
import "./Manager.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function (props) {
  const navigate = useNavigate();
  let [authMode, setAuthMode] = useState("signin");
  let [error, setError] = useState(false);
  let [errorMessage, setErrorMessage] = useState("");
  let [forgotpwd, setforgotpwd] = useState(false);
  let [pwdmessage, setpwdmessage] = useState("");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  let [email, setSignInEmail] = useState("");
  let [password, setSigninpwd] = useState("");
  const handlesigninemailchange = (e) => {
    setSignInEmail(e.target.value);
  };
  const handlePwdSignInChange = (e) => {
    setSigninpwd(e.target.value);
  };
  function PwdIsValid() {
    return true;
  }
  async function signin(e) {
    e.preventDefault();
    let item = { email, password };
    console.warn(item);
    let result = await fetch(
      "https://gada-electronics.up.railway.app/users/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );

    if (result.ok) {
      result = await result.json();
      setError(false);

      if (!result.role.localeCompare("MANAGER")) {
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/manager");
      }
    } else {
      result = await result.text();
      setError(true);
      setErrorMessage("Incorrect Email or Password");
      // setErrorMessage(result);
    }
  }
  //   axios.post('https://gada-electronics.up.railway.app/users/signin',{
  //        name: emailsignin,
  //        email:signinpwd,
  //    }

  //  ).then(result => {
  //   result =  result.json()
  //   localStorage.setItem("result", JSON.stringify(result))
  //  })
  //    .catch(error => {
  //      alert('service error')
  //    })
  async function sendpwdresetrequest(e) {
    e.preventDefault();
    let item = { email };
    let result = await fetch(
      "https://gada-electronics.up.railway.app/users/forgotPassword?email=" +
        email,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // body: JSON.stringify(item),
      }
    );

    if (result.ok) {
      result = await result.text();
      setforgotpwd(true);
      setpwdmessage("Mail Sent");

      // localStorage.setItem("user-info", JSON.stringify(result));
      // if (!result.role.localeCompare("CUSTOMER")) {
      //   navigate("/CustomerHome");
      // }
    } else {
      result = await result.text();
      setforgotpwd(true);
      setpwdmessage("User does not exist");
    }
  }
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <h3 className="position-absolute start-0 top-0 title">
          Welcome to Shopify!
        </h3>
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Manager Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={handlesigninemailchange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={handlePwdSignInChange}
              />
            </div>
            {/* {
              PwdIsValid() ? <label>Correct</label> :  <label>Incorrect</label>

            } */}
            <div className="d-grid gap-2 mt-3">
              <button type="submit" onClick={signin} className="btn btn-danger">
                Submit
              </button>
            </div>
            <div className="d-grid gap-2 mt-3">
              <Link to="/user">
                <button className="btn btn-danger">User Login</button>
              </Link>
              <Link to="/adminsignin">
                <button className="btn btn-danger">Admin Login</button>
              </Link>
            </div>
            <p className="text-center mt-2 text-white">
              <label>Forgot</label>{" "}
              <a href="#" onClick={sendpwdresetrequest}>
                password?
              </a>
            </p>
            {error && <h6>{errorMessage}</h6>}
            {pwdmessage && <h6>{pwdmessage}</h6>}
          </div>
        </form>
      </div>
    );
  }
}
