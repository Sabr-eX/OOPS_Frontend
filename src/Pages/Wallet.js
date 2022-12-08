import axios from "axios";
import Axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import "./Wallet.css";
import Navbar from "./Navbar";

export default function (props) {
  const userInfoFromLS = JSON.parse(localStorage.getItem("user-info"));
  let [addamount, setAddAmount] = useState("");
  let [authMode, setAuthMode] = useState("signin");
  let [balance, setbalance] = useState(userInfoFromLS?.balance);
  // let [newBalance,setNewBalance]= useState("")

  const handleInput = (e) => {
    setAddAmount(e.target.value);
  };
  // const handleBalance = (e) => {
  //   setNewBalance(e.target.value);
  // };

  // const logValue = () => {
  //   setName(name)
  //   console.log(name);
  // };

  // useEffect(() => {
  //   fetchBalance();
  // }, []);
  // const fetchBalance =async(e)=>{
  //   e.preventDefault();
  //   let result = fetch("https://gada-electronics.up.railway.app/users/id"+1)
  //   balance = result.balance

  // }

  async function add(e) {
    e.preventDefault();
    console.log(userInfoFromLS);

    balance = parseInt(addamount);
    let item = { balance };
    let result = await fetch(
      "https://gada-electronics.up.railway.app/users/edit/" +
        userInfoFromLS?.id,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    setbalance(result.balance);
  }

  // function addBalance(){
  //   let item = {addamount}
  //   console.warn(item)
  // }

  return (
    <div className="Auth-form-container">
      <Navbar />

      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">My Wallet</h3>
          {/* <div className="text-center text-white">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div> */}

          <div className="form-group mt-3">
            <label>
              Enter amount you want to add <br />
              (INR)
            </label>
            <input
              onChange={handleInput}
              type="amount"
              className="form-control mt-1"
              placeholder="Amount"
              value={addamount}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={add} className="btn btn-danger">
              Add
            </button>
          </div>

          {/* <button type="submit" formAction="/admin" className="btn btn-danger">
              Login as Admin
            </button>
            <button type="submit" formAction="/manager" className="btn btn-danger">
              Login as Manager
            </button>
            </div>
            <p className="text-center mt-2 text-white">
              Forgot <a href="#" >password?</a>
            </p> */}

          {/* <div className="form-group mt-3">
              <label>Balance</label>
              <input
                
              />
            </div> */}
          <div className="balance">
            <label>Balance : {balance}</label>
            <br></br>
          </div>
        </div>
      </form>
    </div>
  );

  // return (

  //   <div className="Auth-form-container">
  //     <h3 className="position-absolute start-0 top-0 ms-1">Name</h3>
  //     <form className="Auth-form">
  //       <div className="Auth-form-content">

  //         <h3 className="Auth-form-title">Sign Up</h3>
  //         <div className="text-center text-white">
  //           Already registered?{" "}
  //           <span className="link-primary " onClick={changeAuthMode}>
  //             Sign In
  //           </span>
  //         </div>
  //         <div className="form-group mt-3">
  //           <label>Full Name</label>
  //           <input
  //             type="email"
  //             className="form-control mt-1"
  //             placeholder="e.g Jane Doe"
  //           />
  //         </div>
  //         <div className="form-group mt-3">
  //           <label>Email address</label>
  //           <input
  //             type="email"
  //             className="form-control mt-1"
  //             placeholder="Email Address"
  //           />
  //         </div>
  //         <div className="form-group mt-3">
  //           <label>Password</label>
  //           <input
  //             type="password"
  //             className="form-control mt-1"
  //             placeholder="Password"
  //           />
  //         </div>
  //         <div className="form-group mt-3">
  //           <label>Confirm Password</label>
  //           <input
  //             type="password"
  //             className="form-control mt-1 mb-4"
  //             placeholder="Password"
  //           />
  //         </div>

  //         <div className="d-grid gap-2 mt-3">
  //           <button type="submit" className="btn btn-danger">
  //             Submit
  //           </button>
  //           <button type="submit" formAction="/admin" className="btn btn-danger">
  //             Login as Admin
  //           </button>
  //           <button type="submit" formAction="/manager" className="btn btn-danger">
  //             Login as Manager
  //           </button>
  //         </div>

  //       </div>
  //     </form>
  //   </div>
  // )
}
