import styled from "styled-components";
import * as React from 'react';
import { useEffect,useState } from "react";
import axios from "axios";



export default function UsersList() {

  const [product, setProduct] = useState();

useEffect(() => {
  const getProducts = async () => {
    await axios.get('https://gada-electronics.up.railway.app/users/all')
      .then((res) => { setProduct(res?.data); })
      .then((res) => console.log(res?.data))
  }
  getProducts();
}, [])


return (
  <div style={{ height: 400, width: "100%" }}>
<div className="d-flex flex-column">
      <h1 className="text-white m-3">Products</h1>
      <table className="table table-dark table-xl m-3">
        <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Phone No.</th>
            {/* <th scope="col">Price</th> */}
            {/* <th scope="col">Edit</th> */}
            <th scope="col">Role</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>

{product?.map(product => {
        return (
          <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            {/* <ImageContainer>
 <img src={product?.image} alt=""/>
 </ImageContainer> */}
            <td>{product.phone}</td>
            {/* <td>
              <button type="button" class="btn btn-success btn-xsm me-2">
                Add
              </button>
            </td> */}
            <td>{(product.role==="ADMIN")?(<Admin>Admin</Admin>):((product.role==="MANAGER")?(<Manager>Manager</Manager>):(<Customer>Customer</Customer>))}</td>
            <td>
              <button type="button" class="btn btn-danger btn-xsm me-2">
                Delete
              </button>
            </td>
          </tr>
  )})}
          
        </tbody>
      </table>
      </div>
  </div>
);
}

  const ImageContainer = styled.div`
    img{
      height: 40px;
    }
  `;

  const Actions = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  button{
    border:none;
    outline: none;
    padding:3px 5px;
    color:white;
    border-radius:3px;
    cursor:pointer;
  }
  `;

  const Delete=styled.button`
    background-color:rgb(255,77,73);
  `;
  const View=styled.button`
    background-color:rgb(114,225,40);
  `;

  const Admin=styled.div`
    color:rgb(253,181,40);
    background-color:rgb(253,181,40,0.12);
    padding:3px 5px;
    border-radius:3px;
    font-size:14px;
  `
  const Customer=styled.div`
  color:rgb(38,198,249);
  background-color:rgb(38,198,249,0.12);
  padding:3px 5px;
  border-radius:3px;
  font-size:14px;
`
const Manager=styled.div`
color:rgb(181,253,40);
background-color:rgb(181,253,40,0.12);
padding:3px 5px;
border-radius:3px;
font-size:14px;
`