import React, { useRef, useState, useEffect, useContext } from "react"
import './Admin.css'
import axios from "axios"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
    let [authMode, setAuthMode] = useState("signin")
    let [error, setError] = useState(false)
  let [errorMessage, setErrorMessage] = useState("")
    let [email,setSignInEmail]= useState("")
  let [password,setSigninpwd] = useState("")
  const handlesigninemailchange=(e)=>{
    setSignInEmail(e.target.value)
  }
  const handlePwdSignInChange=(e)=>{
    setSigninpwd(e.target.value)
  }
  function isValid(){
    return false;
  }
  function PwdIsValid(){
    return true;
  }
  async function signin (e){
    e.preventDefault();
    let item = {email,password}
//     console.warn(item)
//     axios.post('https://gada-electronics.up.railway.app/users/signin',{
//          name: emailsignin,
//          email:signinpwd,
//      }

//    ).then(result3 => {
//     result3 =  result3.json()
//     localStorage.setItem("result", JSON.stringify(result3))
//    })
//      .catch(error => {
//        alert('service error')
//      })
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
  localStorage.setItem("user-info", JSON.stringify(result));
  if (!result.role.localeCompare("ADMIN")) {
    navigate("/CustomerHome");
  }
}
else {
  result = await result.text();
  setError(true);
  setErrorMessage(result);
  // setErrorMessage(result);
}

} 


  
      return (
        
        <div className="Auth-form-container">
          <h3 className="position-absolute start-0 top-0 ms-1">Name</h3>
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title" >Admin Sign In</h3>
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
              <Link to='/user'><button  className="btn btn-danger">
                Login as User
              </button>
              </Link>
              <Link to='/manager'><button formAction="/manager" className="btn btn-danger">
                Login as Manager
              </button>
              </Link>
              </div>
              <p className="text-center mt-2 text-white">
              <label>Forgot</label> <a href="#" >password?</a>
              </p>
              {error &&
            <h6>
              {errorMessage}
            </h6>
          }
             
    
            </div>
           
          </form>
        </div>
      )
    
  }
