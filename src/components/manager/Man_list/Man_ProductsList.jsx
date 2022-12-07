import styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import EditProduct from "../EditProduct";


export default function Man_ProductsList() {

const [product, setProduct] = useState();

useEffect(() => {
  const getProducts = async () => {
    await axios.get('https://gada-electronics.up.railway.app/products/all')
      .then((res) => { setProduct(res?.data); })
      .then((res) => console.log(res?.data))
  }
  getProducts();
}, [])



  return (
    <div>
      

<div className="d-flex flex-column">
        <h1 className="text-white m-3">Products</h1>
        <table className="table table-dark table-xl m-3">
          <thead>
            <tr>
              <th scope="col">Product ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              {/* <th scope="col">Edit</th> */}
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>

  {product?.map(product => {
          return (
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <ImageContainer>
   <img src={product?.image} alt=""/>
   </ImageContainer>
              <td>₹ {product.price}</td>
              {/* <td>
                <button type="button" class="btn btn-success btn-xsm me-2">
                  Add
                </button>
              </td> */}
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