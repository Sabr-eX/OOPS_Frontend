import React, { useEffect } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Basic() {

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
        "price": cart[i]?.price * ((100 - cart[i]?.discount) / 100)
      }
      if (tempObject.quantity == 0) {
        continue;
      }
      postObject.orderItems.push(tempObject);
    }

    let result = await fetch("https://gada-electronics.up.railway.app/orders/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(postObject)
    });
    // console.log(result.text());
    if (result.ok) {
      result = await result.json();
      // Completed
    }
    else {
      result = await result.text();
      // This means the error is coming
    }
    console.log(result);

  }

  return (
    <div className="mx-auto mt-5" style={{ maxWidth: '900px' }}>
      <Navbar />
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            
            <MDBCardBody>
              <form> 
                <MDBInput label='Address' type='text' className="mb-4" />
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
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
                  <span><strong>Balance</strong></span>
                  {/* <span><strong>Available Balance</strong></span> */}
                </MDBListGroupItem>
              </MDBListGroup>
              <Link to='/confirmation'>
                <button className='btn btn-primary' onClick={request}>Confirm Order</button>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
