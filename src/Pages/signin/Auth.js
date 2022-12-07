import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import React, { useRef, useState, useEffect, useContext } from "react"
import './Auth.css'
import axios from "axios"
import { json, unstable_HistoryRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'

export default function () {
  const userRef = useRef();
  const errRef = useRef();
  let [authMode, setAuthMode] = useState("signin")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setFullname] = useState("")
  const [phone, setphone] = useState("")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePwdChange = (e) => {
    setPassword(e.target.value)
  }
  const handleFullName = (e) =>{
    setFullname(e.target.value)
  }
  const handlePhoneChange =(e) =>{
    setphone(e.target.value)
  }
  
  
  // const handlesigninemailchange=(e)=>{
  //   setSignInEmail(e.target.value)
  // }
  // const handlePwdSignInChange=(e)=>{
  //   setSigninpwd(e.target.value)
  // }
  
  function PwdIsValid(){
    return true;
  }

         async function  signup(){
          
         let item = {name,email,password,phone}
         console.warn(item)
        //  axios.post('https://gada-electronics.up.railway.app/users/signup',{
        //       name: name,
        //       email:email,
        //       password: password,
        //       phone:phone

        //   }

        // ).then(result => {
        //   localStorage.setItem("result", JSON.stringify(result))
        //   console.log(result)
        // })
        //   .catch(error => {
        //     alert('service error')
      //   axios({
      //     method  : 'post',
      //     url : 'https://gada-electronics.up.railway.app/users/signup',
      //     data : item,
      //   })
      //   .then((res)=>{
      //     console.log(res);
      //   localStorage.setItem("user-info", JSON.stringify(res))
      //   })
      //   .catch((err) => {throw err});
      // }
          
        let result = await fetch("https://gada-electronics.up.railway.app/users/signup",{
          method:'POST',
          body: JSON.stringify(item),
          headers:{
            "Content-Type": "application/json",
            "Accept":"application/json"
          }
        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        //  history.pushState("/add")
      }
    //     async function signin (){
    //     let item2 = {emailsignin,signinpwd}
    //     // console.warn(item2)
    //   //   axios.post('https://gada-electronics.up.railway.app/users/signin',{
    //   //        name: emailsignin,
    //   //        email:signinpwd,
    //   //    }

    //   //  ).then(result => {
    //   //   localStorage.setItem("result", JSON.stringify(result))
        
    //   //  })
    //   //    .catch(error => {
    //   //      alert('service error')
    //   //    })
    //   let result2 = await fetch("https://gada-electronics.up.railway.app/users/signin",{
    //     method : 'POST',
    //     headers:{
    //       "Content-Type":"application/json",
    //       "Accept": "application/json"
    //     },
    //     body : JSON.stringify(item2)

    //   })
    //   result2 = await result2.json()
    //   localStorage.setItem("user-info",JSON.stringify(result2))
      
    //  }

  return (

    <div className="Auth-form-container">
      <h3 className="position-absolute start-0 top-0 ms-1 title">Welcome to Shopify!</h3>
      <form className="Auth-form">

        <div className="Auth-form-content">

          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center text-white">
            <label>Already registered?{"  "}</label>
            <Link to='/user'>
            <span className="link-primary" >
              Sign In
            </span>
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              name="user-name"
              id="userName"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              value = {name}
              onChange={handleFullName}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          <div className = "form-group mt-3">
            <label>Phone Number</label>
            <input
            type= "phoneno"
            className ="form-control mt-1"
            placeholder="Phone no."
            name = "phoneno"
            value = {phone}
            onChange={handlePhoneChange}
            />
          </div>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={password}
              onChange={handlePwdChange}

            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Link to ='/user'>
            <button onClick={signup} className="btn btn-danger">
              Submit
            </button>
            </Link>
            
          </div>
          <div className="d-grid gap-1 mt-3">
             <div className="row">
             <div className="col-6">
              <Link to='/adminsignin'>
              <button  className="btn btn-danger">
                Admin Login
              </button>
              </Link>
              </div>
              <div className="col-6">
              <Link to='/manager'><button formAction="/manager" className="btn btn-danger">
                Manager Login
              </button>
              </Link>
              </div>
              </div>
              </div>

        </div>
      </form>
    </div>
  )
}