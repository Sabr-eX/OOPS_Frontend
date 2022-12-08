import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import EditProduct from "../EditProduct";


export default function ProductsList() {
  const navigate = useNavigate();
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProducts = async () => {
      await axios.get('https://gada-electronics.up.railway.app/products/all')
        .then((res) => { setProduct(res?.data); })
        .then((res) => console.log(res?.data))
    }
    getProducts();
  }, [])

  async function handleDelete(id) {
    let item = { id }
    console.log(id)
    let result = await fetch(
      "https://gada-electronics.up.railway.app/products/delete/" + id,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(item)
      }
    );
    // console.log()
    let newProductResponse = await axios.get('https://gada-electronics.up.railway.app/products/all');
    newProductResponse = await newProductResponse.data;
    console.log(newProductResponse);
    setProduct(newProductResponse);
  }


  return (
    <div>
      <div className="d-flex flex-column">
        <h1 className="text-white m-3">Products</h1>
        <table className="table table-striped table-bordered table-hover table-xl m-3">
          <thead>
            <tr style={{ height: "5px", fontSize: "20px", fontStyle: "BOLD" }}>
              <th scope="col">Product ID</th>
              <th scope="col">Image</th>
              <th scope="col">Product Name</th>

              <th scope="col">Price</th>
              <th scope="col">Quantiy</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {product?.map((product) => {
              return (
                <tr>
                  <td>{product.id}</td>
                  <ImageContainer>
                    <img src={product?.image} alt="" />
                  </ImageContainer>
                  <td>{product.name}</td>

                  <td>₹ {product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-success btn-xsm me-2"
                      onClick={() =>
                        navigate("/admin/products/edit-product", {
                          state: product,
                        })
                      }
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="submit"
                      onClick={() => handleDelete(product.id)}
                      class="btn btn-danger btn-xsm me-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
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

const Delete = styled.button`
    background-color:rgb(255,77,73);
  `;
const View = styled.button`
    background-color:rgb(114,225,40);
  `;