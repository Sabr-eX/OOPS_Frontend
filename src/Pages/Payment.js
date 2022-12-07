import React, { useEffect } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import axios from 'axios';
import Navbar from './Navbar';

export default function Basic() {

  const total = JSON.parse(localStorage.getItem("cart") || "[]");
  let totalValue = 0;
  for (var i = 0; i < total.length; i++) {
    const item = total[i];
    totalValue = totalValue + (item.quantity) * (item.price);
    console.log(totalValue);
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


  return (
    <div className="mx-auto mt-5" style={{ maxWidth: '900px' }}>
      <Navbar/>
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">Biling details</MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <form>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='First name' type='text' />
                  </MDBCol>
                </MDBRow>
                <MDBInput label='Address' type='text' className="mb-4" />
                <MDBInput label='Email' type='text' className="mb-4" />
                <MDBInput label='Phone' type='text' className="mb-4" />
                {/* <MDBTextArea label='Additional information' rows={4} className="mb-4" /> */}


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
              <button>Confirm Order</button>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
