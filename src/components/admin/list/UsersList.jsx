import styled from "styled-components";
import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function UsersList() {
  const navigate = useNavigate();
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get("https://gada-electronics.up.railway.app/users/all")
        .then((res) => {
          setProduct(res?.data);
        })
        .then((res) => console.log(res?.data));
    };
    getProducts();
  }, []);

async function handleDelete(id){
  let item = {id}
  console.log(id)
  let result = await fetch(
    "https://gada-electronics.up.railway.app/users/delete/"+id,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    }
    );
    result = await result.json();
}

async function handleEdit(id){
  let item = {id}
  console.log(id)
  // let result = await fetch(
  //   "https://gada-electronics.up.railway.app/users/"+id,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify(item)
  //   }
  //   );
  //   result = await result.json();
}

return (
  <div style={{ height: 400, width: "100%" }}>
<div className="d-flex flex-column">
      <h1 className="text-white m-3">Users</h1>
      <table className="table table-dark table-xl m-3">
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Phone No.</th>
            {/* <th scope="col">Price</th> */}
            {/* <th scope="col">Edit</th> */}
            <th scope="col">Role</th>
            <th scope="col">Edit</th>
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
            <button type="button" class="btn btn-success btn-xsm me-2" onClick={() => navigate("/admin/users/edit-user",{state:product})}>
                  Edit
                </button>
              </td>
            <td>
              <button type="button" onClick={() => handleDelete(product.id)} class="btn btn-danger btn-xsm me-2">
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
  img {
    height: 40px;
  }
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    border: none;
    outline: none;
    padding: 3px 5px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const Delete = styled.button`
  background-color: rgb(255, 77, 73);
`;
const View = styled.button`
  background-color: rgb(114, 225, 40);
`;

const Admin = styled.div`
  color: rgb(253, 181, 40);
  background-color: rgb(253, 181, 40, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`;
const Customer = styled.div`
  color: rgb(38, 198, 249);
  background-color: rgb(38, 198, 249, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`;
const Manager = styled.div`
  color: rgb(181, 253, 40);
  background-color: rgb(181, 253, 40, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`;
