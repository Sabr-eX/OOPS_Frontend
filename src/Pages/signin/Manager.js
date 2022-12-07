import React, { useRef, useState, useEffect, useContext } from "react"
import './Manager.css'
import axios from "axios"
import { Link } from "react-router-dom";

export default function (props) {
    let [authMode, setAuthMode] = useState("signin")
  
    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
    let [email,setSignInEmail]= useState("")
  let [password,setSigninpwd] = useState("")
  const handlesigninemailchange=(e)=>{
    setSignInEmail(e.target.value)
  }
  const handlePwdSignInChange=(e)=>{
    setSigninpwd(e.target.value)
  }
  function PwdIsValid(){
    return true;
  }
  async function signin (){
    let item = {email,password}
    console.warn(item)
    let result3 = await fetch("https://gada-electronics.up.railway.app/users/signin",{
  method : 'POST',
  headers:{
    "Content-Type":"application/json",
    "Accept": "application/json"
  },
  body : JSON.stringify(item)

})
result3 = await result3.json()
localStorage.setItem("user-info",JSON.stringify(result3))
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
     
 

  
    if (authMode === "signin") {
      return (
        <div className="Auth-form-container">
          <h3 className="position-absolute start-0 top-0 ms-1">Name</h3>
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title" >Manager Sign In</h3>
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
                <button type="submit" onClick = {signin} className="btn btn-danger">
                  Submit
                </button>
                </div>
                <div className="d-grid gap-2 mt-3">
              <Link to='/user'><button  className="btn btn-danger">
                Login as User
              </button>
              </Link>
              <Link to='/adminsignin'><button className="btn btn-danger">
                Login as Admin
              </button>
              </Link>
              </div>
              <p className="text-center mt-2 text-white">
              <label>Forgot</label> <a href="#" >password?</a>
              </p>
            </div>
          </form>
        </div>
      )
    }
  }