import React, { useRef, useState, useEffect, useContext } from "react"
import './Admin.css'
import axios from "axios"
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

export default function () {
  const navigate =useNavigate();
    let [authMode, setAuthMode] = useState("signin")
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
let result = await fetch("https://gada-electronics.up.railway.app/users/signin",{
  method : 'POST',
  headers:{
    "Content-Type":"application/json",
    "Accept": "application/json"
  },
  body : JSON.stringify(item)

})
result = await result.json()
localStorage.setItem("user-info",JSON.stringify(result))
if(!result.role.localeCompare("CUSTOMER"))
{
 navigate('/CustomerHome');
}
else{
  window.prompt("sometext","defaultText");
}
}

return (
    <div className="Auth-form-container">
      <h3 className="position-absolute start-0 top-0 title">Welcome to Shopify!</h3>
      <form className="Auth-form" >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title" >User Sign In</h3>
          <div className="text-center text-white">
            <label className="me-1">Not registered yet?</label>
            <Link to='/auth'>
            <span className="link-primary">
              Sign Up
            </span>
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name="email"
              value={email}
               onChange={handlesigninemailchange}
            // onBlur={() => this.props.actions.updateInput(this.state.inputValue)}
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
           <button onClick={signin} type="submit" className="btn btn-danger">
              Submit
            </button>
            
            </div>
            <div className="d-grid gap-2 mt-3">
            <Link to='/adminsignin'><button  className="btn btn-danger">
              Login as Admin
            </button>
            </Link>
            <Link to='/manager'><button className="btn btn-danger">
              Login as Manager
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