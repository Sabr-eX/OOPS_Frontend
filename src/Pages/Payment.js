import React, { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Payment.css'
import { useNavigate } from 'react-router-dom';


export default function Basic() {
  const navigate = useNavigate();
  const userInfoFromLS = JSON.parse(localStorage.getItem("user-info"))
  let [balance, setbalance] = useState(userInfoFromLS?.balance)
  let [error, setError] = useState(false);
  let [errorMessage, setErrorMessage] = useState("");

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  let totalValue = 0;
  for (var i = 0; i < cart.length; i++) {
    const item = cart[i];
    totalValue = totalValue + (item.quantity) * (item.price);
    // console.log(totalValue);
  }

  // async function sendData(e){
  //   e.preventDefault();
  //  let item = {user,orderItems{id,quantity}}
  //  console.warn(item)
  //  let result = await fetch("https://gada-electronics.up.railway.app/users/signup",{
  //         method:'POST',
  //         body: JSON.stringify(item),
  //         headers:{
  //           "Content-Type": "application/json",
  //           "Accept":"application/json"
  //         }
  //       })
  //       result = await result.json()
  //     }
  //   useEffect(() => {
  //     axios.get('https://fakestoreapi.com/products')
  //       .then(res => {
  //         console.log("getting from " + res.data)
  //       }).catch(err => console.log(err))
  //   }, [])

  //   const postData = (e) => {
  //     e.preventDefault();
  //     axios.post('https://fakestoreapi.com/products',{
  //   }).then(res => res.json()).then(res => console.log(res)).catch(err=> console.log(err))
  // }
  const request = async (event) => {
    event.preventDefault();
    let postObject = {};
    postObject.user = userInfo?.id;
    postObject.orderItems = [];
    for (let i = 0; i < cart.length; i++) {
      const tempObject = {
        "id": cart[i].id,
        "quantity": cart[i]?.quantity,
        "price": Math.round(cart[i]?.price * ((100 - cart[i]?.discount) / 100))
      }
      if (tempObject.quantity == 0) {
        continue;
      }
      postObject.orderItems.push(tempObject);
    }
    // console.log(postObject);

    let result = await fetch("https://gada-electronics.up.railway.app/orders/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(postObject)
    });
    console.log(postObject);
    // console.log(result.text());
    if (result.ok) {
      result = await result.json();
      const newUserInfo = result[0].user;
      console.log(newUserInfo)

      localStorage.setItem('user-info', JSON.stringify(newUserInfo))
      setError(false);
      // localStorage.removeItem("cart");
      navigate('/confirmation');
      // Completed
    }
    else {
      result = await result.text();
      setError(true);
      setErrorMessage(result);
      // This means the error is coming
      // State banan, eerror -> boolean 
      // Erro Message
    }
    console.log(result);

  }
  const cartfromlocal = JSON.parse(localStorage.getItem("cart") || "[]");
  const [CART, setCART] = useState(cartfromlocal)

  return (

    
    <div>

<Navbar />
      <div className='k'>
        <h1 className='k2'>Confirm Order</h1>



        <div className='row'>

          <div className='col-9'>
            {
              CART?.map((cartItem, cartindex) => {
                return (
                  <div className='cart'>
                    <div className='row mt-3'>
                      <div className='col-2' />
                      <div className='col-3'>
                        <img src={cartItem.image} width={120} />
                      </div>

                      <div className='col-1'>

                        <span className='mt-5'> {cartItem.name} </span>

                      </div>

                      <div className='col-1'>
                        <span> {cartItem.quantity} </span>
                      </div>
                      <div className='col-1'>
                        <span> Rs. {cartItem.price * cartItem.quantity} </span></div>
                    </div>


                  </div>
                )
              })
            }

<div className='row'>
            <div className='col-4' />
            <div className='col-1'>
              <p className='para'> Total:</p>  </div>
            <div className='col-1'><p className='para'> Rs. {
              CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
            }
            </p></div>
          </div>
          </div>

          







          {/* <div className="mx-auto mt-5" style={{ maxWidth: '900px' }}>

          </div > */}
          

          
            {/* <MDBRow> */}
            {/* <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">

            <MDBCardBody>
              <form>
                <MDBInput label='Address' type='text' className="mb-4" />
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol> */}


            {/* <MDBCol md="4" className="mb-4 box">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-1">
              <MDBTypography tag="h5" className="mb-0">Summary</MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Total Amount
                  <span>{totalValue}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Wallet Balance</strong>
                  </div>
                  <span><strong>{balance}</strong></span>
                  <span><strong>Available Balance</strong></span>
                  {error &&
                    <h6>
                      {errorMessage}
                    </h6>
                  }
                </MDBListGroupItem>
              </MDBListGroup>
              <Link to='/confirmation'>
                <button className='btn btn-primary' onClick={request}>Confirm Order</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow> */}

            <div className='col-3'>
            <div className='cardd'>

              <table class="table ms-5vw">
                <thead>
                  <tr>
                    <td scope="col">Total Amount</td>
                    <td scope="col">{totalValue}
                      {error &&
                        <h6>
                          {errorMessage}
                        </h6>
                      }</td>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Wallet Balance</th>
                    <th>{balance}</th>
                  </tr>

                </tbody>
              </table>

              <button className='btn btn-primary' onClick={request}>Confirm Order</button>

            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
